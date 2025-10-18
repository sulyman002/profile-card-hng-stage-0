const timeElement = document.getElementById("currentTime");
const updateTime = () => {

     timeElement.textContent = Date.now();
//     const getTime = new Date();

//     const currentTime = getTime.toLocaleTimeString("en-Us", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true
//     })
//   timeElement.textContent = currentTime ;
};
updateTime();
setInterval(updateTime, 1000);
