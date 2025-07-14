import { useRef, useState } from "react";

// Uncontrolled component/input
// function FormPage() {
//     const inputRef = useRef<HTMLInputElement>(null);         5-11 itu gapernah dipake
//     const inputEmailRef = useRef<HTMLInputElement>(null);

//     const handleSubmit =() => {
//         const fullNameFormValue = inputRef.current?.value;
//         const fullEmailFormValue = inputEmailRef.current?.value;
//         alert('form submitted ' + fullNameFormValue+' '+fullEmailFormValue)
//     }
//     return(
//         <div>
//             <h1>halaman form</h1>
//             <div style={{display: 'flex', flexDirection: 'column', gap: '8px', maxWidth:'200px'}}>
//                 <label htmlFor="full-name">Full Name</label>
//                 <input ref={inputRef} id="full-name" type="text" />

//                 <label htmlFor="email">Email</label>
//                 <input ref={inputEmailRef} id="email" type="email" />
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </div>
//     )
// }
// export default FormPage;



// Controlled component/input   original tanpa library
function FormPage() {
    const [fullNameInput, setFullNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleSubmit =() => {
        const fullNameValidation = fullNameInput.length < 3;
        const PasswordValidation = passwordInput.length < 8;

        if (fullNameValidation) {
            setUsernameErrorMessage('username must be at least 3 characters')
        }
        if (PasswordValidation) {
            setPasswordErrorMessage('password must be at least 8 characters')
        }
    }

    return(
        <div>
            <h1>halaman form</h1>
            <h1> {passwordInput} </h1>

            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', maxWidth:'200px'}}>
                <label htmlFor="full-name">Username</label>
                <input onChange={(event) => setFullNameInput(event.target.value)} id="full-name" type="text" value={fullNameInput}/>

                <span style={{color:'red' }}> {usernameErrorMessage} </span>

                <label htmlFor="password">Password</label>
                <input onChange={(event) => setPasswordInput(event.target.value)} id="password" type="password" value={passwordInput} />
                
                <span style={{color:'red' }}> {passwordErrorMessage} </span>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default FormPage;