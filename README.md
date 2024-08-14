- React-Redux ToolKit

  1. Create a folder for store in src folder
  2. Inside a store folder create store.js file
  3. store.js

     ```jsx
     import { configureStore } from "@reduxjs/toolkit";

     const store = configureStore({
       reducer: {},
     });

     export default store;
     ```

  4. Back to main.jsx, add Provider and store

     ```jsx
     import { Provider } from "react-redux";
     import store from "./store/store.js";

     createRoot(document.getElementById("root")).render(
       <Provider store={store}>
         <StrictMode>
           <App />
         </StrictMode>
       </Provider>
     ```

  5. Inside store folder, let create a folder for counter slice : counterSlice
  6. Inside counterSlice folder, create a file called counter.js
  7. counter.js

     ```jsx
     import { createSlice } from "@reduxjs/toolkit";

     const initialState = {
       count: 10,
     };

     const countSlicer = createSlice({
       name: "counter",
       initialState,
       reducers: {},
     });

     export default countSlicer.reducer;
     ```

  8. Back in store.js, let add the reducer

     ```jsx
     import { configureStore } from "@reduxjs/toolkit";
     import counterReducer from "./counterSlice/counter";

     const store = configureStore({
       reducer: {
         myCounter: counterReducer,
       },
     });

     export default store;
     ```

  9. In App.jsx, call useSelector hook from redux to get the global state

     ```jsx
     import { useSelector } from "react-redux";
     import "./App.css";

     function App() {
       const count = useSelector((state) => state.myCounter.count);
       return (
         <>
           <div>
             <h1>React + Redux: Counter </h1>
             <div className="fun">
               <p>
                 Count is: <span>{count}</span>
               </p>
               <div className="funButton">
                 <button>Increase</button>
                 <button>Decrease</button>
               </div>
             </div>
           </div>
         </>
       );
     }

     export default App;
     ```

  10. Lets add reducers in counter.js

      ```jsx
      import { createSlice } from "@reduxjs/toolkit";

      const initialState = {
        count: 10,
      };

      const countSlicer = createSlice({
        name: "counter",
        initialState,
        **reducers: {
          increment: (state) => (state.count += 2),
          decrement: (state) => (state.count -= 2),
        },
      });
      export const { increment, decrement } = countSlicer.actions;**
      export default countSlicer.reducer;
      ```

  11. In app.jsx, add the useDispatch hook and dispatch the reducers from slicer

      ```jsx
      import { useDispatch, useSelector } from "react-redux";
      import "./App.css";
      import { decrement, increment } from "./store/counterSlice/counter";

      function App() {
        const count = useSelector((state) => state.myCounter.count);
        const dispatch = useDispatch();
        return (
          <>
            <div>
              <h1>React + Redux: Counter </h1>
              <div className="fun">
                <p>
                  Count is: <span>{count}</span>
                </p>
                <div className="funButton">
                  <button onClick={() => dispatch(increment())}>
                    Increase
                  </button>
                  <button onClick={() => dispatch(decrement())}>
                    Decrease
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      }

      export default App;
      ```

      1. Lets added the action and payload in reducers.

         ```jsx
         import { createSlice } from "@reduxjs/toolkit";

         const initialState = {
           count: 10,
         };

         const countSlicer = createSlice({
           name: "counter",
           initialState,
           reducers: {
             increment: (state) => {
               state.count += 2;
             },
             decrement: (state) => {
               state.count -= 2;
             },
             increaseByAmount: (state, action) => {
               state.count += action.payload;
             },
           },
         });
         export const { increment, decrement, increaseByAmount } =
           countSlicer.actions;
         export default countSlicer.reducer;
         ```

         ```jsx
         import { useDispatch, useSelector } from "react-redux";
         import "./App.css";
         import {
           decrement,
           increaseByAmount,
           increment,
         } from "./store/counterSlice/counter";

         function App() {
           const count = useSelector((state) => state.myCounter.count);
           const dispatch = useDispatch();
           return (
             <>
               <div>
                 <h1>React + Redux: Counter </h1>
                 <div className="fun">
                   <p>
                     Count is: <span>{count}</span>
                   </p>
                   <div className="funButton">
                     <button onClick={() => dispatch(increment())}>
                       Increase
                     </button>
                     <button onClick={() => dispatch(decrement())}>
                       Decrease
                     </button>
                     <button onClick={() => dispatch(increaseByAmount(100))}>
                       Increase by 100
                     </button>
                   </div>
                 </div>
               </div>
             </>
           );
         }

         export default App;
         ```
