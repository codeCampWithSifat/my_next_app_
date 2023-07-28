/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';

const CustomeErrorPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 5000);
    return (
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/755/755014.png" alt="" width='100%' />
        </div>
    );
};

export default CustomeErrorPage;