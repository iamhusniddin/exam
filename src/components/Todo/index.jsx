// import { Button, Input } from "antd";
// import React, { useEffect, useState } from "react";
// import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { Card } from "antd";
// import { MAIN_API_URL } from "../../utils/api";

// const Todo = ({ mini }) => {
//   const [data, setData] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [addedToBackend, setAddedToBackend] = useState(false);

//   const addTodo = async () => {
//     const res = await fetch(MAIN_API_URL, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: inputValue }),
//     });
//     const datas = await res.json();

//     setAddedToBackend(!addedToBackend);
//   };

//   useEffect(() => {
//     const fetcher = async () => {
//       try {
//         const res = await fetch(MAIN_API_URL);
//         const datas = await res.json();
//         setData(datas);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetcher();
//   }, [addedToBackend]);

//   const actionTodo = (type, id) => {
//     if (type === "delete") {
//       const fetcher = async () => {
//         try {
//           const res = await fetch(MAIN_API_URL + `/${id}`, {
//             method: "DELETE",
//           });
//           const datas = await res.json();
//           setData(datas);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       fetcher();
//     }
//   };
//   return (
//     <div
//       className="home-wrapper d-flex align-items-center justify-content-center flex-column"
//       style={{ marginLeft: `${!mini ? "80px" : "262px"}` }}
//     >
//       <form className="d-flex flex-column gap-2 w-full">
//         <Input className="input"
//           placeholder="Basic usage"
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <Button type="primary" onClick={addTodo}>
//           Add todo
//         </Button>
//       </form>

//       {data.length > 0
//         ? data?.map((value, index) => (
//             <Card
//               key={index}
//               style={{
//                 width: 300,
//               }}
//               actions={[
//                 <CheckOutlined
//                   onClick={() => actionTodo("check")}
//                   key="setting"
//                 />,
//                 <EditOutlined onClick={() => actionTodo("edit")} key="edit" />,
//                 <DeleteOutlined
//                   onClick={() => actionTodo("delete", value.id)}
//                   key="ellipsis"
//                 />,
//               ]}
//             >
//               {value.title}
//             </Card>
//           ))
//         : "No todos"}
//     </div>
//   );
// };

// export default Todo;

import React from 'react'
import { Checkbox, message } from "antd";
import { Input, list } from "postcss";
import { useReducer } from "react";
import './todo.css'

function index() {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "GET_INPUT-VALUE":
        return {
          ...state,
          inputValue: action.val,
        };
      case "ADD_TODO":
        return {
          inputValue: "",
          list: [{ title: state.inputValue, id: Date.now() }, ...state.list],
        };

      case "DELETE_TODO":
        return {
          ...state,
          list: state.list.filter((todo) => todo.id !== action.payLoadID),
        };

      case "EDIT_TODO":
        return {
          ...state,
          selectedID: action.payLoadID,
          editedVal: action.editVal,
        };
      case "GET_EDIT-VALUE":
        return {
          ...state,
          editedVal: action.val,
        };
      case "SAVE_TODO":
        return {
          ...state,
          selectedID: "",
          list: state.list.map((todo) =>
            todo.id === action.payLoadID
              ? { ...todo, title: action.editVal }
              : todo
          ),
        };
    }
  };

  const [state, dispatch] = useReducer(todoReducer, {
    inputValue: "",
    list: [],
    selectedID: "",
    editedVal: "",
  });
  return (
    <div className="mainTodo">
    <div className="">
      <div className="">
        <input
          value={state.inputValue}
          onChange={(e) => {
            dispatch({ type: "GET_INPUT-VALUE", val: e.target.value });
          }}
          className="todoInp"
          type="text"
          placeholder="Enter text"
        />
        <button
          disabled={state.inputValue.length < 1}
          onClick={(e) => dispatch({ type: "ADD_TODO" })}
          className="todoBtn"
        >
          Add
        </button>
      </div>
      <div className='todos'>
        {state.list.length > 0
          ? state.list.map((todo) => (
              <div
                key={todo.id}
                className="todoEl"
              >
                <div className="editIpnDiv">
                  {state.selectedID === todo.id ? (
                    <input
                      value={state.editedVal}
                      onChange={(e) => {
                        dispatch({
                          type: "GET_EDIT-VALUE",
                          val: e.target.value,
                        });
                      }}
                      type="text"
                      defaultValue={todo.title}
                      className="editInp"
                    />
                  ) : (
                    <h5 className="todoTitle">{todo.title}</h5>
                  )}
                </div>
                <div className="">
                  <Checkbox />
                  <button
                    onClick={() => {
                      dispatch({ type: "DELETE_TODO", payLoadID: todo.id });
                      message.success(
                        `${todo.title} is deleted  successfuly`
                      );
                    }}
                    className="deleteTodo"
                  >
                    Delete
                  </button>
                  {state.selectedID === todo.id ? (
                    <button
                      onClick={() =>{
                        dispatch({
                          type: "SAVE_TODO",
                          payLoadID: todo.id,
                          editVal: state.editedVal,
                        });
                        state.editedVal.length > 1 && 
                        dispatch({
                          type: "SAVE_TODO",
                          payLoadID: todo.id,
                          editVal: todo.title,
                        })
                      }
                        
                      }
                      className="editTodo"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "EDIT_TODO",
                          payLoadID: todo.id,
                          editVal: todo.title,
                        })
                      }
                      className="editTodo"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ))
          : "No todos"}
      </div>
    </div>
  </div>
  )
}

export default index
