// const { exec } = require('child_process');

// // Function to execute a command
// const executeCommand = (command, cwd) => {
//   return new Promise((resolve, reject) => {
//     exec(command, { cwd }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Command execution error: ${error}`);
//         reject(error);
//       } else {
//         console.log(stdout);
//         resolve();
//       }
//     });
//   });
// };

// // Function to run both frontend and backend
// const run = async () => {
//   try {
//     // Run frontend
//     await executeCommand('npm run serve', './client');

//     // Run backend
//     await executeCommand('npm start', './server');
//   } catch (error) {
//     console.error(`Error occurred: ${error}`);
//   }
// };

// // Call the run function
// run();
