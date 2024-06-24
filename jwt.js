function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// function redirectToPageBasedOnRole() {
//     const jwtToken = localStorage.getItem('jwtToken');

//     try {
//         const payload = parseJwt(jwtToken);
//         const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

//         if (payload.exp < currentTime) {
//             console.log('Token has expired');
//             window.location.href = 'index.html'; 
//             return; 
//         }

//         // Redirect based on role, only if not already on the target page
//         const rolePageMap = {
//             'Admin': '/dashboard/admin.html',
//             'Employee': '/dashboard/employee.html',
//             'User': '/dashboard/user.html'
//         };
//         const targetPage = rolePageMap[payload.role];
//         if (targetPage && window.location.pathname !== `/${targetPage}`) {
//             window.location.href = targetPage;
//         }
//     } catch (error) {
//         console.error('Error parsing JWT or redirecting:', error);
//     }
// }

// // Call the function to redirect the user based on their role
// redirectToPageBasedOnRole();