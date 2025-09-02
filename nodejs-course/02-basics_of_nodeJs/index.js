import { error } from 'console';
import fs from 'fs';
import fsPromise from "fs/promises"

const fun1 = ()=>{
    console.log("hello, hacker");
}

const fun2 = ()=>{
    console.log("hello,hacker 2");
}

const fun3 = async ()=>{
    const value = await fsPromise.readFile('sample.txt','utf8');
    console.log(value);
}

fun3();
fun2();
fun1();

