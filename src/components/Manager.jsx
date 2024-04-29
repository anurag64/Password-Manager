import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("password");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        alert("copied to clipboard" + text)
        navigator.clipboard.writeText(text)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.jpg"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }

    }
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])

    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
            bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full 
            bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className="mycontainer flex flex-col item-center">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>


                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full 
                border border-green-500 w-full p-4 py-1'
                        type="text" name="site" id='' />
                    <div className='flex w-full justify-between gap-2'>
                        <div className='w-full'>
                            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full 
                    border border-green-500 w-full p-4 py-1'
                                type="text" name="username" id='' />
                        </div>
                        <div className="relative w-full">


                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full 
                    border border-green-500 w-full p-4 py-1'
                                type="password" name="password" id='' />
                            <span className="absolute right-0 right-6 cursor-pointer" onClick={()=>{showPassword}}>
                                <img ref={ref} className='p-1' width={37} src="icons/eye.jpg" alt="eye" />
                            </span>
                        </div>
                    </div>
                </div>
                <button onClick={savePassword} className='flex justify-center items-center gap-2 
                bg-green-600 hover:bg-green-500 rounded-full px-8 py-2 w-fit border hello-hello
                border-green-900 mt-3'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>
            </div>
            <div className="mycontainer passwords">
                <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                {passwordArray.length === 0 && <div> No Passwords to show</div>}
                {passwordArray.length != 0 && <table className="table-auto w-full rounded-md 
                overflow-hidden">
                    <thead className=''>
                        <tr>
                            <th className='py-2'>Site</th>
                            <th className='py-2'>Username</th>
                            <th className='py-2'>Password</th>
                        </tr>
                    </thead>
                    <tbody className='bg-green-100'>
                        {passwordArray.map((item) => {
                            return <tr>
                                <td className='py-2 border border-white text-center'>
                                    <div className='flex items-center justify-center'>
                                        <a href={item.site}
                                            target='blank'>{item.site}</a>
                                        <div className='lordiconcopy size=7 cursor-pointer' onClick={()=>{copyText(item.site)}}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "padding-left": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    <div className='flex items-center justify-center'>
                                        <span>{item.username}</span>
                                        <div className='lordiconcopy size=7 cursor-pointer' onClick={()=>{copyText(item.username)}}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    <div className='flex items-center justify-center'>
                                        <span>{item.password}</span>
                                        <div className='lordiconcopy size=7 cursor-pointer' onClick={()=>{copyText(item.password)}}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>}
            </div>
        </>
    )
}
export default Manager