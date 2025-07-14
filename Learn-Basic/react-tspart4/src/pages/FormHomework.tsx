import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 🧠 Schema validation
const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email format' }),
  password: z
    .string()
    .min(8, { message: 'Minimum 8 characters' })
    .regex(/[A-Z]/, { message: 'Must contain at least 1 uppercase letter' })
    .regex(/[0-9]/, { message: 'Must contain at least 1 number' }),
  age: z.coerce.number().min(18, { message: 'You must be at least 18' }),
});

type FormData = z.infer<typeof schema>;

const FormHomework = () => {
  const [users, setUsers] = useState<FormData[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted Data:', data);
    setUsers((prev) => [...prev, data]); // ⬅️ Simpan data di state lokal
    reset(); // Clear form
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Name:
          <input type="text" {...register('name')} />
          <span style={{ color: 'red' }}>{errors.name?.message}</span>
        </label>

        <label>
          Email:
          <input type="email" {...register('email')} />
          <span style={{ color: 'red' }}>{errors.email?.message}</span>
        </label>

        <label>
          Password:
          <input type={showPassword ? 'text' : 'password'} {...register('password')} />
          <span style={{ color: 'red' }}>{errors.password?.message}</span>
        </label>

        <label>
          <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} /> Show Password
        </label>

        <label>
          Age:
          <input type="number" {...register('age')} />
          <span style={{ color: 'red' }}>{errors.age?.message}</span>
        </label>

        <button type="submit">Register</button>
      </form>

      {/* 🧾 Bonus: Display users list */}
      <h3 style={{ marginTop: '30px' }}>Registered Users:</h3>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        users.map((user, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FormHomework;
