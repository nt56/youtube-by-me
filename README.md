# React YouTube App
- A YouTube clone built using React, allowing users to search for and watch videos using the YouTube API.

# Features
- Video Search: Search for videos by keywords using the YouTube Data API.
- Video Playback: Watch videos directly within the app using YouTube’s embedded player.
- Related Videos: Display related videos based on the currently playing video.
  
# Technologies Used
- React.js: Front-end framework for building the user interface.
- YouTube Data API: To fetch video search results, details, and related content.
- React Router: For navigation between different routes (e.g., search results and video playback).
- TailwindCSS : For styling the user interface.

# Key Components
- SearchBar: A search input that allows users to query YouTube for videos.
- VideoList: Displays a list of search results.
- VideoPlayer: Embedded YouTube player for playing selected videos.
- RelatedVideos: Shows related videos based on the currently playing video.

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
   
