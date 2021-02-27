import QuoteController from "./Controllers/QuoteController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js";
import TimeController from "./Controllers/TimeController.js";
import TaskController from "./Controllers/TaskController.js";

class App {
  weatherController = new WeatherController()
  quoteController = new QuoteController()
  imageController = new ImageController()
  timeController = new TimeController()
  taskController = new TaskController
}

window["app"] = new App();
