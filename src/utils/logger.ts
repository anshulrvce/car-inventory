
import winston from 'winston'

// Define the severity levels. 
const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
}

// This method set the current severity based on 
// the current NODE_ENV: show all the log levels 
// if the server was run in development mode; otherwise, 
// if it was run in production, show only warn and error messages.
const level = () => {
	const env = process.env.NODE_ENV || 'development'
	const isDevelopment = env === 'development'
	return isDevelopment ? 'debug' : 'warn'
}

// Define different colors for each level. 
const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'green',
	http: 'magenta',
	debug: 'white',
}

// Tell winston that you want to link the colors 
winston.addColors(colors)

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
	// Add the message timestamp with the preferred format
	winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
	// Tell Winston that the logs must be colored
	winston.format.colorize({ all: true }),
	// Define the format of the message showing the timestamp, the level and the message
	winston.format.printf(
		(info) => `${info.timestamp} ${info.level}: ${info.message}`,
	),
)

// Define which transports the logger must use to print out messages. 
// In this example, we are using three different transports 
const transports = [
	// Allow the use the console to print the messages
	new winston.transports.Console(),
	// Allow to print all the error level messages inside the error.log file
	new winston.transports.File({
		filename: 'logs/error.log',
		level: 'error',
	}),
	// Allow to print all the error message inside the all.log file
	// (also the error log that are also printed inside the error.log(
	new winston.transports.File({ filename: 'logs/all.log' }),
]

// Create the logger instance that has to be exported 
// and used to log messages.
const Logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports,
})

export default Logger