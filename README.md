ANSWERS IN THIS FILE
1) How can you implement shared functionality across a component tree?

SOLUTION:-
we can use below given approaches

1)   Higher-Order Components (HOCs)
   A HOC is a function that takes a component and returns a new component with additional functionality.

2) Render Props
   Render props is a technique where a component uses a function as a prop to share logic with other components.

3) Context API
   The Context API is built into React and allows you to create global variables that can be passed around the component tree.

4) Custom hooks
   Custom hooks allow you to extract logic into reusable functions that can be shared across multiple components.

5)State Management Libraries (e.g., Redux
  Libraries like Redux or Zustand provide a way to manage the global state of your application, making it accessible across all components.

  ____________________________________________________________________________________________________________________________________________________________________________________________________

 2) Why is the useState hook appropriate for handling state in a complex component?
solution:-
    useState is ideal for managing state that's local to a specific component.
    It triggers re-renders whenever the state changes, ensuring that the UI always reflects the current state.
    It can be used multiple times within a single component, allowing you to manage multiple independent pieces of state.
    It keeps state management simple and declarative.
    It can optimize performance by ensuring that the initial state calculation only happens once, even in complex components.

    ___________________________________________________________________________________________________________________________________________________________________________________________________
3) Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

 SOLUTION ->  VIDEO DISPLAYING WORKING OF APP AND screenshots below:-

 https://drive.google.com/file/d/14ybSH4iNvlf9alQXkDhH5vfoGBZLn3Bj/view?usp=sharing

 ![Screenshot 2024-08-29 183602](https://github.com/user-attachments/assets/55f1eb89-0828-4475-bff3-398ba8bcfac9)

 ![Screenshot 2024-08-29 183620](https://github.com/user-attachments/assets/f3b64cf4-c632-4754-a9f5-999009ea1ed2)

 ![Screenshot 2024-08-29 183629](https://github.com/user-attachments/assets/0cd5d886-ce18-4c9d-9df8-964d9b68d7c1)

 ___________________________________________________________________________________________________________________________________________________________________________________________________________



 
 
 
