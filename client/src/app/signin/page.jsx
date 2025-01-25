'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  fullName: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Too Short!').max(15, 'Too Long!').required('Required'),
  address: Yup.string().required('Required'),
})

export default function SignIn() {
  return (
    (<div
      className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md py-4">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <Formik
          initialValues={{ email: '', password: '', fullName: '', username: '', phoneNumber: '', address: '' }}
          validationSchema={SignInSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.setSubmitting(false)
          }}>
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email" />
                  {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password" />
                  {errors.password && touched.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Field
                    as={Input}
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name" />
                  {errors.fullName && touched.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose a username" />
                  {errors.username && touched.username && <div className="text-red-500 text-sm">{errors.username}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Field
                    as={Input}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number" />
                  {errors.phoneNumber && touched.phoneNumber && <div className="text-red-500 text-sm">{errors.phoneNumber}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Field
                    as={Input}
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address" />
                  {errors.address && touched.address && <div className="text-red-500 text-sm">{errors.address}</div>}
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
              </CardFooter>
            </Form>
          )}
        </Formik>
        <div className='flex justify-center'>
          <CardDescription className="text-black">Already have an Account? <Link href="/login" className="italic font-bold text-blue-500">LogIn here.</Link></CardDescription>
        </div> 
      </Card>
    </div>)
  );
}

