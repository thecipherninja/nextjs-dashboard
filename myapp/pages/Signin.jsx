import React, { useEffect, useState } from 'react';
import {useSession, signIn, signOut} from 'next-auth/react';
import { useRouter } from 'next/router';

const signin = () => {
    const router = useRouter();

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
        router.push('/home');
        }
    }, [status]);

    // if (status !== 'authenticated') {
    //     return <p>Not signed in</p>;
    // }

    return (
        <div id="main" class="flex flex-row w-[1440px] h-[1024px]">
            <div id="left-card" class="flex justify-center items-center bg-black w-[588px] h-[1024px]">
                <div class="w-[246px] h-[88px]">
                    <p class="text-white font-montserrat text-7xl not-italic font-bold leading-normal">
                        Board.
                    </p>
                </div>
            </div>
            <div id="right-card" class="flex justify-center items-center bg-offwhite w-[852px] h-[1024px]">
                <div id="form-container" class="relative w-[385px] h-[505px]">
                    <div id="signin-text-1" class="w-[131px] h-[44px]">
                        <p class="text-black font-montserrat text-3xl not-italic font-bold leading-normal">
                            Sign In
                        </p>
                    </div>
                    <div id="signin-text-2" class="mt-[5px] w-[161px] h-[19px]">
                        <p class="text-black font-lato text-base non-italic font-normal leading-normal">
                            Sign in to your account
                        </p>
                    </div>
                    <div id="signin-providers" class="mt-[26px] w-[385px] h-[30px] flex flex-nowrap">
                        <button id="google-signin" class="px-[19px] pt-[8px] w-[180px] h-[30px] flex flex-nowrap flex-shrink-0 bg-white rounded-[10px]" onClick={() => signIn()}>
                            <div id="google-logo" class="w-[14px] h-[14px] flex-shrink-0 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <g clip-path="url(#clip0_0_347)">
                                        <path d="M13.9926 7.13096C13.9926 6.55738 13.9449 6.13883 13.8419 5.70477H7.1394V8.2936H11.0736C10.9943 8.93695 10.566 9.90584 9.61414 10.5569L9.6008 10.6436L11.72 12.2478L11.8668 12.2622C13.2152 11.0452 13.9926 9.25473 13.9926 7.13096" fill="#4285F4"/>
                                        <path d="M7.13948 13.9519C9.0669 13.9519 10.685 13.3318 11.8669 12.2622L9.61422 10.5569C9.0114 10.9677 8.20233 11.2545 7.13948 11.2545C5.2517 11.2545 3.64946 10.0376 3.07831 8.35565L2.99459 8.3626L0.791024 10.0291L0.762207 10.1074C1.93612 12.3862 4.34742 13.9519 7.13948 13.9519Z" fill="#34A853"/>
                                        <path d="M3.07816 8.35566C2.92746 7.92161 2.84024 7.45651 2.84024 6.97597C2.84024 6.49537 2.92746 6.03033 3.07023 5.59627L3.06624 5.50383L0.835056 3.81058L0.762055 3.84451C0.27823 4.79015 0.000610352 5.85207 0.000610352 6.97597C0.000610352 8.09987 0.27823 9.16173 0.762055 10.1074L3.07816 8.35566" fill="#FBBC05"/>
                                        <path d="M7.13948 2.69735C8.47995 2.69735 9.38417 3.26317 9.89976 3.73602L11.9145 1.81375C10.6771 0.689847 9.0669 0 7.13948 0C4.34742 0 1.93612 1.5657 0.762207 3.84449L3.07038 5.59626C3.64946 3.91428 5.2517 2.69735 7.13948 2.69735" fill="#EB4335"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_347">
                                            <rect width="14" height="14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div id="google-text" class="ml-[10px] w-[118px] h-[15px] flex flex-nowrap">
                                <p class="font-montserrat text-xs font-normal not-italic text-secondary flex-shrink-0">
                                    Sign in with Google
                                </p>
                            </div>
                        </button>
                        <button id="apple-signin" class="ml-[25px] px-[24px] w-[180px] h-[30px] flex flex-nowrap flex-shrink-0 bg-white rounded-[10px]">
                            <div id="apple-logo" class="mt-[7px] w-[11.5px] h-[14px] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <g clip-path="url(#clip0_0_355)">
                                        <path d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952V1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181V4.0181Z" fill="#999999"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_355">
                                        <rect width="11.5" height="14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div id="apple-text" class="mt-[8px] ml-[10.5px] w-[110px] h-[15px] flex flex-nowrap">
                                <p class="font-montserrat text-xs font-normal not-italic text-secondary flex-shrink-0">
                                    Sign in with Apple
                                </p>
                            </div>
                        </button>
                    </div>
                    <form id="form" class="mt-[25px] px-[30px] py-[30px] w-[385px] h-[317px] bg-white rounded-[20px]">
                        <div id="email-container" class="">
                            <div id="email-text">
                                <p class="font-lato text-base not-italic font-normal text-black">
                                    Email address
                                </p>
                            </div>
                            <input type="email" id="email" class="form-input mt-[10px] w-[325px] h-[40px] flex-shrink-0 border-0 rounded-[10px] bg-offwhite" />
                        </div>
                        <div id="password-container" class="mt-[20px]">
                            <div id="password-text">
                                <p class="font-lato text-base not-italic font-normal text-black">
                                    Password
                                </p>
                            </div>
                            <input type="password" id="password" class="form-input mt-[10px] w-[325px] h-[40px] flex-shrink-0 border-0 rounded-[10px] bg-offwhite" />
                        </div>
                        <div id="forgot-password-text" class="mt-[20px] w-[124px] h-[19px] font-lato text-base not-italic font-normal text-link">
                            <p>
                                Forgot password?
                            </p>
                        </div>
                        <button type="submit" class="mt-[20px] w-[325px] h-[40px] font-montserrat text-base font-bold not-italic text-center bg-black flex-shrink-0 rounded-[10px]">
                            <p class=" flex flex-col text-white text-center w-full">
                                Sign In
                            </p>
                        </button>
                    </form>
                    <div id="register-text" class="absolute mx-auto left-0 right-0 mt-[20px] w-[261px] h-[19px]">
                        <span class="font-lato text-base font-normal text-secondary">
                            Don't have an account?
                        </span>
                        <span class="ml-[4px] font-lato text-base font-normal text-link">
                            Register here
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default signin;