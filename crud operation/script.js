// Rajini img url
// https://w7.pngwing.com/pngs/181/236/png-transparent-man-wearing-sunglasses-facing-sideways-rajinikanth-india-kabali-film-tamil-cinema-rajinikanth-celebrities-india-super-thumbnail.png
const userDetails = [
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxOTBQc4oEeuakfd3nGABYtrbbl8KB7B2dw&usqp=CAU",
        firstName: "Surya",
        lastName: "kumar",
        emailId: "surya123@mitrahsoft.com",
        phoneNumber: 8848466111
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVIBGDwXDxu42k14fD3Wtro5kD76U0aWo5w&usqp=CAU",
        firstName: "Vijay",
        lastName: "kumar",
        emailId: "vijay321@mitrahsoft.com",
        phoneNumber: 8756439908
    }, {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9WtbgvwXEIWdCRp1YqYV56fGeqpQy8s2EdBtj9C3eFJMc8vikgKW7BRuswdLALmhZkA&usqp=CAU",
        firstName: "Ajith",
        lastName: "kumar",
        emailId: "ajith234@mitrahsoft.com",
        phoneNumber: 9087604331
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxOTBQc4oEeuakfd3nGABYtrbbl8KB7B2dw&usqp=CAU",
        firstName: "Surya",
        lastName: "kumar",
        emailId: "surya123@mitrahsoft.com",
        phoneNumber: 8848466111
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVIBGDwXDxu42k14fD3Wtro5kD76U0aWo5w&usqp=CAU",
        firstName: "Vijay",
        lastName: "kumar",
        emailId: "vijay321@mitrahsoft.com",
        phoneNumber: 8756439908
    },
]
// Default Data
let newUser = {
    id: 0,
    imgUrl: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: ""
};
let toEditValue = 0;
// Table and formInputs Data
const tableBody = document.getElementById("userTableBody");
const formInputs = document.querySelectorAll('input');
const tableRowContent = ["imgUrl", "firstName", "lastName", "emailId", "phoneNumber"]
const errDiv = document.querySelectorAll(".errDiv");
// Display Details
function showUserDetail() {
    userDetails.map((user, index) => {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("class", "align-items-center justify-content-center");
        tableRow.innerHTML = `<th scope="row"> ${index + 1} </th>
                            <td><img src=${user.imgUrl} style="width:55px; height:55px; border-Radius:50%" alt=${user.firstName + user.lastName}></td>
                            <td>${user.firstName} </td>
                            <td>${user.lastName}</td>
                            <td>${user.emailId}</td>
                            <td>${user.phoneNumber}</td>
                            <td>
                            <button type="button" class="btn btn-outline-secondary" id="editVal" onclick=(editVal(${index + 1}))>Edit</button>
                            <button type="button" class="btn btn-outline-danger" id="deleteVal" onclick=(deleteVal(${index}))>Delete</button></td>`;
        return tableBody.appendChild(tableRow);
    })
}
showUserDetail();
const addUser = () => {
    event.preventDefault();
    // Validation for Empty Inputs
    let isValid = true;
    formInputs.forEach((ele, index) => {
        if (ele.value === "") {
            errDiv[index].style.display = "block";
            errDiv[index].innerText = `Enter a ${tableRowContent[index]}`;
            isValid = false;
        }
        else {
            errDiv[index].style.display = "none";
        }
    })
    if (isValid) {
        if (!toEditValue) {
            // Adding new User
            tableRowContent.forEach((item, index) => {
                newUser[item] = formInputs[index].value;
                formInputs[index].value = "";
            })
            userDetails.unshift(newUser);
        } else {
            // Edit Existing User Value
            tableRowContent.forEach((item, index) => {
                newUser[item] = formInputs[index].value;
                formInputs[index].value = "";
            })
            userDetails.splice(toEditValue - 1, 1, newUser);
            toEditValue = 0;
        }
        deleteElements();
        showUserDetail();
        formInputs[0].focus();
        newUser = {};
        console.log(toEditValue, newUser, userDetails);
    }
}
// Edit User Value
const editVal = (userId) => {
    tableRowContent.forEach((item, index) => {
        formInputs[index].value = userDetails[userId - 1][item];
    })
    toEditValue = userId;
}
// Delete User Value
const deleteVal = (userId) => {
    userDetails.splice(userId, 1);
    deleteElements();
    showUserDetail();
}
// Delete table rows
const deleteElements = () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}
