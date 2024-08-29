# Structure Of Our App

Header
Body
    - SideBar
        - MenuItems
    - MainContainer
        - ButtonLists
        - VideoContainer
            - VideoCard
Footer

# Redux

- install redux-toolkit and react-redux
- create store
- create slice
- import slice in store
- provide to app 


# Debouncing

- user typing speed is fast then no need to show the suggestion
- user typing speed is slow then show the suggestions

- working
  
    key - i
    - render the componenet
    - call useEfect()
    - start time => make api call after 200ms
   
    key - ip(before 200ms)
    - destroy the component(call useEffect return() method)
    - re-render the componenet
    - call useEfect()
    - start time => make api call after 200ms (new timer)
   
    if no key press after 200ms then make an api call
   