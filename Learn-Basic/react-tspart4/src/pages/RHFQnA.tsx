
// pembahasan penambahan fitur gender lalu ada options female sedang hamil atau tidak

import { zodResolver } from "@hookform/resolvers/zod";      //zodResolver ini sebagai validatornya
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


const registerFormSchema = z.object({       //library bantuan dari RHF juga untuk validasi form
    username: z.string().min(3, {message:'minimal 3 bro'}).max(10,{message:'max nya 10 aj bro'}),    //name dengan tipe data string dan ada min & maksimal
    password: z.string().min(8),    
    gender: z.enum(['male','female']),      //check gender dan jika female apakah hamil?
    isPregnant: z.boolean().optional(),
}) 

// ini ilmu typescript
type RegisterFormSchema = z.infer<typeof registerFormSchema>; //kanyk mengreferensikan, agar auto penulisan user&passwd gitu

const RHFQnA =() =>{
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<RegisterFormSchema>({              //ini penggunaan react hook form "useForm"
        resolver:zodResolver(registerFormSchema)            //buat object untuk menyimpan validatornya
    });

    const handleRegisterUser =(values: RegisterFormSchema) => {
        alert('form submitted');
        console.log(values);
    };

    return(
        <div>
            <h1>RHP page</h1>
            <form onSubmit={form.handleSubmit(handleRegisterUser)}
            style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                <label>
                    Username: <input type="text" {...form.register('username')} />
                </label>
                <span style={{color:'red'}}>{form.formState.errors.username?.message}</span>
{/* --------- Password --------- */}
                <label>
                    Password:   {/* cara baca if ternary ini, kalo showpasswd true tipedata nya jadi text */}
                    <input type={showPassword ? "text" :"password"} {...form.register('password')} />
                    <span style={{color:'red'}}>{form.formState.errors.password?.message}</span>
                </label>

{/* --------- Check female hamil --------- */}
                <label>
                    <select {...form.register('gender')}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                <label>
                    <span style={{color:'red'}}>{form.formState.errors.gender?.message}</span> </label>
                </label>

                {form.watch('gender') === 'female' && (
                <label>
                    Hamil?
                    <input type="checkbox" {...form.register('isPregnant')} />
                </label>
                )}

                <button style={{width:'fit-content'}}>Register User</button>
            </form>
        </div>
    );
};

export default RHFQnA;

