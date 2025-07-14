import { zodResolver } from "@hookform/resolvers/zod";      //zodResolver ini sebagai validatornya
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


const registerFormSchema = z.object({       //library bantuan dari RHF juga untuk validasi form
    username: z.string().min(3, {message:'minimal 3 bro'}).max(10,{message:'max nya 10 aj bro'}),    //name dengan tipe data string dan ada min & maksimal
    password: z.string().min(8),    
    repeatPassword: z.string(),
    age: z.coerce.number().min(18),      //tanpa coerce, input nya akan string bukan interger. //min ini bukan length tapi value karena bertipe integer
    date: z.coerce.date().min(new Date()).optional(),
}).superRefine((arg,ctx)=> {                        //ini kondisi password harus sama
    if (arg.password !== arg.repeatPassword) {
        ctx.addIssue({
            code:'custom',
            path:['repeatPassword'],
            message:'password tidak sama',
        })
    };
})          

// ini ilmu typescript
type RegisterFormSchema = z.infer<typeof registerFormSchema>; //kanyk mengreferensikan, agar auto penulisan user&passwd gitu

const RHFPage =() =>{
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

                <label >
                    Repeat Password:
                    <input type={showPassword ? "text" :"password"} {...form.register('repeatPassword')} />
                </label>
                <span style={{color:'red'}}>{form.formState.errors.repeatPassword?.message}</span>

                <label>
                    <input type="checkbox" onChange={(event)=> setShowPassword(event.target.checked)} />Show Password
                </label>
{/* --------- Password --------- */}
                <label >
                    Age: <input type="number" {...form.register('age')} />
                </label>
                <span style={{color:'red'}}>{form.formState.errors.age?.message}</span>

                <label >
                    Date: <input type="date" {...form.register('date')} />
                </label>
                <span style={{color:'red'}}>{form.formState.errors.date?.message}</span>

                <button style={{width:'fit-content'}}>Register User</button>
            </form>
        </div>
    );
};

export default RHFPage;


    // type RegisterFormSchema = {             //awal nya buat ini dulu baru yg bawah2 nya
    //     password:string;
    //     username:string;                     //sekarang pake yg ada z.infer nya 🙂
    // };
