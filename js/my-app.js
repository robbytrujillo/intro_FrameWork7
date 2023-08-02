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

var $$ = Dom7;

// Create full-layout notification
var notificationFull = app.notification.create({
  icon: '<i class="icon demo-icon">7</i>',
  title: "Notification",
  titleRightText: "now",
  subtitle: "This is a message",
  text: "Welcome!",
  closeTimeout: 3000,
});

// Open Notifications
$$(".open-full").on("click", function () {
  notificationFull.open();
});

var calendarDefault = app.calendar.create({
  inputEl: "#demo-calendar-default",
});
