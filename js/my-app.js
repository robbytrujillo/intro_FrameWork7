var app = new Framework7({
  // App root element
  root: "#app",
  // App Name
  name: "My App",
  // App id
  id: "com.myapp.test",
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
      path: "/about/",
      url: "about.html",
    },
  ],
  // ... other parameters
});

var mainView = app.views.create(".view-main");

var calendarDefault = app.calendar.create({
  inputEl: "#demo-calendar-default",
});
