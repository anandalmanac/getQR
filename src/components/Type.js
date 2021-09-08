import React from 'react'
import styled from 'styled-components'

function Type() {
    return (
        <Container>
            <Content>
                <div className="head">
                    <h1>What type of QR can we make?</h1>
                    <h4>We offer these Static QR Codes that are completely for free and will never expire. Once generated, it’s yours forever but you will not be able to edit the content or track its scans.</h4>
                </div>
                <div className='rectangle'><img src="rect.png" alt="" /></div>
                 <div className='rectangle-2'><img src="rect.png" alt="" /></div>
               

                
                <div className="types">
                    <div className="type  type-1">
                        <div>
                            
                             <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5431 18.2559C10.6051 18.2786 10.6465 18.3239 10.6671 18.392C10.6878 18.46 10.6775 18.528 10.6361 18.596L8.06307 21.4186C7.64972 21.8721 7.17437 22.2348 6.63702 22.5069C6.09967 22.7789 5.55199 22.9377 4.99397 22.983C4.43595 23.0283 3.87794 22.983 3.31992 22.847C2.7619 22.7109 2.25555 22.4275 1.80087 21.9968C1.24286 21.5207 0.808843 20.9425 0.498834 20.2624C0.188824 19.5822 0.0234856 18.9021 0.00281827 18.2219C-0.017849 17.5418 0.0751538 16.8503 0.281827 16.1475C0.4885 15.4446 0.839844 14.8325 1.33586 14.311L5.33498 9.92405C5.97567 9.22123 6.71969 8.69978 7.56705 8.3597C8.41441 8.01962 9.28244 7.92894 10.1711 8.08764C10.9565 8.22367 11.5765 8.47306 12.0312 8.83581C12.4859 9.19856 12.8475 9.61798 13.1162 10.0941C13.1576 10.2074 13.1524 10.2925 13.1007 10.3491C13.0491 10.4058 12.9922 10.4568 12.9302 10.5022C12.8682 10.5475 12.7959 10.6155 12.7132 10.7062L12.4962 10.9443C12.2895 11.1937 12.0415 11.3184 11.7522 11.3184C11.4628 11.3184 11.1993 11.188 10.9617 10.9273C10.724 10.6666 10.4605 10.4682 10.1711 10.3321C9.88179 10.1961 9.56145 10.1394 9.2101 10.1621C8.85876 10.1848 8.54875 10.2415 8.28007 10.3321C8.0114 10.4228 7.73239 10.6269 7.44305 10.9443L2.85491 15.9774C2.58623 16.2722 2.38989 16.6122 2.26589 16.9976C2.14188 17.3831 2.10055 17.7685 2.14188 18.1539C2.18322 18.5393 2.28656 18.9247 2.45189 19.3102C2.61723 19.6956 2.88591 20.0017 3.25792 20.2284C3.7746 20.6138 4.33262 20.7498 4.93197 20.6365C5.53132 20.5231 6.03767 20.251 6.45102 19.8203L8.43508 17.6778C8.47641 17.6098 8.53841 17.5984 8.62108 17.6438C9.2411 17.9385 9.88179 18.1426 10.5431 18.2559ZM19.1614 1.04805C19.7194 1.52416 20.1534 2.09096 20.4634 2.74844C20.7735 3.40592 20.9491 4.08607 20.9905 4.7889C21.0318 5.49172 20.9388 6.19455 20.7115 6.89737C20.4841 7.6002 20.1224 8.21233 19.6264 8.73378L15.6273 13.1208C14.9866 13.8236 14.2426 14.3337 13.3952 14.6511C12.5479 14.9685 11.6695 15.0592 10.7601 14.9232C9.97479 14.8098 9.36511 14.5604 8.93109 14.175C8.49708 13.7896 8.1354 13.3702 7.84606 12.9167C7.80472 12.826 7.81506 12.7467 7.87706 12.6787L8.43508 12.0665C8.66242 11.8398 8.92076 11.7265 9.2101 11.7265C9.49944 11.7265 9.74745 11.8398 9.95412 12.0665C10.2021 12.3386 10.4811 12.5426 10.7911 12.6787C11.1012 12.8147 11.4215 12.8827 11.7522 12.8827C12.0829 12.8827 12.4032 12.8147 12.7132 12.6787C13.0232 12.5426 13.2919 12.3386 13.5192 12.0665L18.1074 7.06741C18.376 6.77268 18.5724 6.42126 18.6964 6.01317C18.8204 5.60508 18.8617 5.20832 18.8204 4.8229C18.7791 4.43748 18.6654 4.0634 18.4794 3.70065C18.2934 3.3379 18.0247 3.03183 17.6734 2.78244C17.1773 2.4197 16.6297 2.28367 16.0303 2.37435C15.431 2.46504 14.9143 2.74844 14.4803 3.22454L12.5272 5.36703C12.4652 5.43504 12.4032 5.44638 12.3412 5.40103C11.7625 5.12897 11.1218 4.91359 10.4191 4.75489C10.3365 4.75489 10.2951 4.70955 10.2951 4.61886C10.2951 4.52817 10.3055 4.47149 10.3261 4.44882L12.8992 1.62618C13.3126 1.17275 13.7879 0.810001 14.3253 0.537939C14.8626 0.265878 15.4 0.0958398 15.9373 0.0278245C16.4747 -0.0401909 17.0327 0.0164886 17.6114 0.197863C18.19 0.379237 18.7067 0.662634 19.1614 1.04805Z" fill="#344FA1"/>
                            </svg>
                            <h2>URL</h2>
                        </div>
                        <p>Use this type to open a link to a webpage, contact form, or Youtube.</p>
                    </div>
                    <div className="type type-2">
                        <div>
                            
                             <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.6182 10.6971C34.3305 -3.56833 13.6642 -3.5631 0.381686 10.6971C-0.117814 11.2334 -0.127564 12.1414 0.355436 12.6976L2.92344 15.6548C3.38394 16.1859 4.12494 16.1972 4.60344 15.6879C15.5474 4.0506 32.451 4.04799 43.3972 15.6879C43.8757 16.1972 44.6167 16.185 45.0772 15.6548L47.6452 12.6976C48.1275 12.1414 48.1177 11.2334 47.6182 10.6971ZM23.9999 27.8571C21.3487 27.8571 19.1999 30.3512 19.1999 33.4286C19.1999 36.5059 21.3487 39 23.9999 39C26.6512 39 28.8 36.5059 28.8 33.4286C28.8 30.3512 26.6512 27.8571 23.9999 27.8571ZM39.2002 20.5803C30.5557 11.707 17.4344 11.7165 8.79969 20.5803C8.28219 21.1114 8.26569 22.0333 8.75694 22.5956L11.3399 25.5546C11.7899 26.0699 12.5144 26.1048 12.9937 25.6242C19.2899 19.3067 28.7242 19.3207 35.0055 25.6242C35.4847 26.1048 36.2092 26.0708 36.6592 25.5546L39.2422 22.5956C39.7342 22.0333 39.717 21.1105 39.2002 20.5803Z" fill="#344FA1"/>
                            </svg>

                            <h2>WI-FI</h2>
                        </div>
                        <p>Use this type to connect to a WiFi network without typing the password.</p>
                    
                    </div>
                    <div className="type type-3">
                        <div>
                            
                            <svg width="51" height="39" viewBox="0 0 51 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.75 0H4.25C1.90365 0 0 1.87165 0 4.17857V34.8214C0 37.1283 1.90365 39 4.25 39H46.75C49.0964 39 51 37.1283 51 34.8214V4.17857C51 1.87165 49.0964 0 46.75 0ZM46.75 34.8214H4.25V4.17857H46.75V34.8214ZM18.4167 19.5C21.5422 19.5 24.0833 17.0016 24.0833 13.9286C24.0833 10.8556 21.5422 8.35714 18.4167 8.35714C15.2911 8.35714 12.75 10.8556 12.75 13.9286C12.75 17.0016 15.2911 19.5 18.4167 19.5ZM10.4833 30.6429H26.35C27.4479 30.6429 28.3333 29.8942 28.3333 28.9714V27.3C28.3333 24.5317 25.6682 22.2857 22.3833 22.2857C21.4271 22.2857 20.7276 22.9821 18.4167 22.9821C16.0349 22.9821 15.4594 22.2857 14.45 22.2857C11.1651 22.2857 8.5 24.5317 8.5 27.3V28.9714C8.5 29.8942 9.38542 30.6429 10.4833 30.6429ZM31.875 25.0714H41.7917C42.1812 25.0714 42.5 24.758 42.5 24.375V22.9821C42.5 22.5991 42.1812 22.2857 41.7917 22.2857H31.875C31.4854 22.2857 31.1667 22.5991 31.1667 22.9821V24.375C31.1667 24.758 31.4854 25.0714 31.875 25.0714ZM31.875 19.5H41.7917C42.1812 19.5 42.5 19.1866 42.5 18.8036V17.4107C42.5 17.0277 42.1812 16.7143 41.7917 16.7143H31.875C31.4854 16.7143 31.1667 17.0277 31.1667 17.4107V18.8036C31.1667 19.1866 31.4854 19.5 31.875 19.5ZM31.875 13.9286H41.7917C42.1812 13.9286 42.5 13.6152 42.5 13.2321V11.8393C42.5 11.4563 42.1812 11.1429 41.7917 11.1429H31.875C31.4854 11.1429 31.1667 11.4563 31.1667 11.8393V13.2321C31.1667 13.6152 31.4854 13.9286 31.875 13.9286Z" fill="#344FA1"/>
                            </svg>

                            <h2>VCARD</h2>
                        </div>
                        <p>Use this type to create a digital business card with save to phone feature.</p>
                    
                    </div>
                    <div className="type type-4">
                        <div>
                            
                             <svg width="38" height="49" viewBox="0 0 38 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.4926 12.2828L25.8767 0.514063C25.5528 0.185938 25.1156 0 24.6568 0H1.72727C0.771875 0 0 0.782031 0 1.75V47.25C0 48.218 0.771875 49 1.72727 49H36.2727C37.2281 49 38 48.218 38 47.25V13.5242C38 13.0594 37.8165 12.6109 37.4926 12.2828ZM34.0165 14.3281H23.858V4.03594L34.0165 14.3281ZM34.1136 45.0625H3.88636V3.9375H20.1875V15.75C20.1875 16.3592 20.4263 16.9434 20.8515 17.3741C21.2767 17.8049 21.8533 18.0469 22.4545 18.0469H34.1136V45.0625ZM18.5682 30.2969H8.63636C8.39886 30.2969 8.20455 30.4937 8.20455 30.7344V33.3594C8.20455 33.6 8.39886 33.7969 8.63636 33.7969H18.5682C18.8057 33.7969 19 33.6 19 33.3594V30.7344C19 30.4937 18.8057 30.2969 18.5682 30.2969ZM8.20455 23.2969V25.9219C8.20455 26.1625 8.39886 26.3594 8.63636 26.3594H29.3636C29.6011 26.3594 29.7955 26.1625 29.7955 25.9219V23.2969C29.7955 23.0562 29.6011 22.8594 29.3636 22.8594H8.63636C8.39886 22.8594 8.20455 23.0562 8.20455 23.2969Z" fill="#344FA1"/>
                            </svg>

                            <h2>TEXT</h2>
                        </div>
                        <p>Use this type to display text in any language, of up to 300 characters.</p>
                    
                    </div>
                    <div className="type type-5">
                       <div>
                            
                             <svg width="57" height="45" viewBox="0 0 57 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57 5.625C57 2.53125 54.435 0 51.3 0H5.7C2.565 0 0 2.53125 0 5.625V39.375C0 42.4688 2.565 45 5.7 45H51.3C54.435 45 57 42.4688 57 39.375V5.625ZM51.3 5.625L28.5 19.6875L5.7 5.625H51.3ZM51.3 39.375H5.7V11.25L28.5 25.3125L51.3 11.25V39.375Z" fill="#344FA1"/>
</svg>

                            <h2>EMAIL</h2>
                        </div>
                        <p>Use this type to send an email with a predefined message to any email address.</p>
                    
                    </div>
                    <div className="type type-6">
                        <div>
                            
                             <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 0C22.061 0 16.7442 1.61285 12.2218 4.63458C7.69948 7.65632 4.17473 11.9512 2.09332 16.9762C0.0119154 22.0012 -0.532676 27.5305 0.528417 32.865C1.58951 38.1995 4.20863 43.0995 8.05457 46.9454C11.9005 50.7914 16.8005 53.4105 22.135 54.4716C27.4695 55.5327 32.9988 54.9881 38.0238 52.9067C43.0488 50.8253 47.3437 47.3005 50.3654 42.7782C53.3872 38.2558 55 32.939 55 27.5C55 20.2065 52.1027 13.2118 46.9454 8.05456C41.7882 2.89731 34.7935 0 27.5 0ZM27.5 50C23.0499 50 18.6998 48.6804 14.9997 46.2081C11.2996 43.7357 8.41569 40.2217 6.71272 36.1104C5.00975 31.999 4.56417 27.475 5.43234 23.1105C6.30051 18.7459 8.44343 14.7368 11.5901 11.5901C14.7368 8.44341 18.7459 6.3005 23.1105 5.43233C27.475 4.56416 31.999 5.00974 36.1104 6.71271C40.2217 8.41568 43.7357 11.2996 46.2081 14.9997C48.6804 18.6998 50 23.0499 50 27.5C50 33.4674 47.6295 39.1903 43.4099 43.4099C39.1903 47.6295 33.4674 50 27.5 50ZM32.5 15V12.5C32.5 11.837 32.2366 11.2011 31.7678 10.7322C31.2989 10.2634 30.663 10 30 10C29.337 10 28.7011 10.2634 28.2322 10.7322C27.7634 11.2011 27.5 11.837 27.5 12.5V15H25V12.5C25 11.837 24.7366 11.2011 24.2678 10.7322C23.7989 10.2634 23.163 10 22.5 10C21.837 10 21.2011 10.2634 20.7322 10.7322C20.2634 11.2011 20 11.837 20 12.5V15H17.5C16.837 15 16.2011 15.2634 15.7322 15.7322C15.2634 16.2011 15 16.837 15 17.5C15 18.163 15.2634 18.7989 15.7322 19.2678C16.2011 19.7366 16.837 20 17.5 20H20V35H17.5C16.837 35 16.2011 35.2634 15.7322 35.7322C15.2634 36.2011 15 36.837 15 37.5C15 38.163 15.2634 38.7989 15.7322 39.2678C16.2011 39.7366 16.837 40 17.5 40H20V42.5C20 43.163 20.2634 43.7989 20.7322 44.2678C21.2011 44.7366 21.837 45 22.5 45C23.163 45 23.7989 44.7366 24.2678 44.2678C24.7366 43.7989 25 43.163 25 42.5V40H27.5V42.5C27.5 43.163 27.7634 43.7989 28.2322 44.2678C28.7011 44.7366 29.337 45 30 45C30.663 45 31.2989 44.7366 31.7678 44.2678C32.2366 43.7989 32.5 43.163 32.5 42.5V40C34.4891 40 36.3968 39.2098 37.8033 37.8033C39.2098 36.3968 40 34.4891 40 32.5C39.9958 30.6532 39.3104 28.8728 38.075 27.5C39.3104 26.1272 39.9958 24.3468 40 22.5C40 20.5109 39.2098 18.6032 37.8033 17.1967C36.3968 15.7902 34.4891 15 32.5 15ZM32.5 35H25V30H32.5C33.163 30 33.7989 30.2634 34.2678 30.7322C34.7366 31.2011 35 31.837 35 32.5C35 33.163 34.7366 33.7989 34.2678 34.2678C33.7989 34.7366 33.163 35 32.5 35ZM32.5 25H25V20H32.5C33.163 20 33.7989 20.2634 34.2678 20.7322C34.7366 21.2011 35 21.837 35 22.5C35 23.163 34.7366 23.7989 34.2678 24.2678C33.7989 24.7366 33.163 25 32.5 25Z" fill="#344FA1"/>
</svg>

                            <h2>BITCOIN</h2>
                        </div>
                        <p>Use this type to request crypto payments from major cryptocurrencies.</p>
                    
                    </div>
                    <div className="type type-4">
                        <div>
                            
                             <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2947 43.9762H15.0731C10.6103 43.9374 6.21199 42.9142 2.19668 40.9806C1.45808 40.6363 0.849939 40.0663 0.461278 39.3542C0.072618 38.6421 -0.0761474 37.8252 0.0367599 37.0231C0.159555 36.2156 0.536276 35.4672 1.11314 34.8848C1.69 34.3024 2.43751 33.9158 3.24895 33.7802C5.73732 33.4507 8.13117 32.6182 10.2825 31.3342C6.54743 28.436 3.67194 24.5888 1.9608 20.2005C0.249668 15.8122 -0.233365 11.0461 0.562895 6.40752C0.670857 5.67278 0.989242 4.98429 1.48016 4.42399C1.97108 3.86369 2.61387 3.45516 3.33203 3.24703C4.03072 3.02925 4.77847 3.01995 5.48244 3.22026C6.18642 3.42058 6.8156 3.8217 7.29188 4.37381C8.90906 6.47838 10.9413 8.2339 13.2646 9.53329C15.588 10.8327 18.1537 11.6487 20.8052 11.9315C20.9319 8.69367 22.3339 5.63448 24.7097 3.41192C25.896 2.28451 27.2965 1.4027 28.8297 0.817864C30.3628 0.233027 31.9979 -0.0431385 33.6396 0.00546134C35.2814 0.0540611 36.8969 0.426454 38.3922 1.10094C39.8875 1.77543 41.2326 2.73852 42.3491 3.93409C42.64 4.18932 43.0014 4.35197 43.3865 4.40097C43.7716 4.44997 44.1626 4.38306 44.509 4.20892C45.1692 3.89987 45.9044 3.78353 46.6288 3.87347C47.3531 3.96342 48.0368 4.25595 48.5999 4.71692C49.1631 5.17789 49.5826 5.7883 49.8094 6.47693C50.0363 7.16556 50.0611 7.90401 49.8811 8.60613C49.2424 11.2173 48.0323 13.6569 46.3366 15.7516C45.9629 23.5697 42.4899 30.9241 36.675 36.2113C30.86 41.4985 23.1747 44.2896 15.2947 43.9762ZM15.2947 38.4797H15.5162C18.7358 38.5896 21.9453 38.0641 24.9587 36.9337C27.9722 35.8033 30.7295 34.0905 33.0709 31.8945C35.4123 29.6986 37.2913 27.0632 38.5987 24.1412C39.9062 21.2191 40.6162 18.0686 40.6876 14.8721C40.7333 13.9961 41.0973 13.1663 41.7122 12.5361C42.3876 11.6876 42.9636 10.7656 43.429 9.78788C42.4314 9.78976 41.4447 9.58266 40.5333 9.18012C39.6219 8.77758 38.8063 8.18865 38.14 7.45186C37.4992 6.82128 36.7381 6.32391 35.9013 5.98886C35.0644 5.65381 34.1686 5.48782 33.2663 5.5006C32.355 5.47721 31.448 5.63269 30.5974 5.95811C29.7468 6.28352 28.9693 6.77248 28.3096 7.39689C27.4195 8.23511 26.7669 9.29062 26.417 10.4578C26.0671 11.625 26.0322 12.8629 26.3158 14.0477L27.0358 17.1807L23.7959 17.4005C20.476 17.6692 17.1369 17.2185 14.0098 16.0796C10.8828 14.9407 8.04255 13.1409 5.68579 10.8047C5.58471 14.4225 6.49659 17.9973 8.32004 21.1315C10.1435 24.2657 12.8071 26.8367 16.0146 28.5585L18.6453 30.0425L16.9008 32.516C15.0141 34.9716 12.4291 36.8096 9.47949 37.7926C11.3717 38.2633 13.3163 38.4942 15.267 38.4797H15.2947Z" fill="#344FA1"/>
</svg>

                            <h2>TWITTER</h2>
                        </div>
                        <p>Use this type to open a link to a webpage, contact form, or Youtube.</p>
                    
                    </div>
                    <div className="type type-5">
                        <div>
                            
                             <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 0.5H5.5C4.04131 0.5 2.64236 1.07946 1.61091 2.11091C0.579462 3.14236 0 4.54131 0 6V50C0 51.4587 0.579462 52.8576 1.61091 53.8891C2.64236 54.9205 4.04131 55.5 5.5 55.5H38.5C39.9587 55.5 41.3576 54.9205 42.3891 53.8891C43.4205 52.8576 44 51.4587 44 50V17L27.5 0.5ZM15.1195 39.5225C14.2698 40.32 13.0157 40.6775 11.5555 40.6775C11.2724 40.6806 10.9894 40.664 10.7085 40.628V44.5495H8.25V33.7255C9.3595 33.56 10.4806 33.4846 11.6022 33.5C13.134 33.5 14.223 33.7915 14.9573 34.3773C15.6558 34.9328 16.1287 35.843 16.1287 36.9155C16.126 37.9935 15.7685 38.9038 15.1195 39.5225ZM25.5888 43.2487C24.4338 44.2085 22.6765 44.665 20.5288 44.665C19.2418 44.665 18.3315 44.5825 17.7127 44.5V33.7282C18.8227 33.5663 19.9434 33.4899 21.065 33.5C23.1467 33.5 24.4998 33.874 25.5557 34.6715C26.697 35.5185 27.412 36.8688 27.412 38.8075C27.412 40.9058 26.6448 42.355 25.5888 43.2487ZM35.75 35.6175H31.537V38.1227H35.475V40.1413H31.537V44.5522H29.0455V33.5825H35.75V35.6175ZM27.5 19.75H24.75V6L38.5 19.75H27.5Z" fill="#344FA1"/>
</svg>

                            <h2>PDF</h2>
                        </div>
                        <p>Need editable and trackable functionalities instead? Check out our dynamic codes.</p>
                    
                    </div>
                    <div className="type type-6">
                        <div>
                            
                             <svg width="68" height="40" viewBox="0 0 68 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="68" height="40" rx="15" fill="#344FA1"/>
<path d="M13.1371 28V12.352H18.5131C19.3771 12.352 20.1851 12.44 20.9371 12.616C21.6891 12.776 22.3451 13.056 22.9051 13.456C23.4651 13.84 23.9051 14.36 24.2251 15.016C24.5611 15.656 24.7291 16.448 24.7291 17.392C24.7291 18.304 24.5611 19.096 24.2251 19.768C23.9051 20.44 23.4651 20.992 22.9051 21.424C22.3451 21.856 21.6971 22.176 20.9611 22.384C20.2251 22.592 19.4411 22.696 18.6091 22.696H16.6651V28H13.1371ZM16.6651 19.888H18.3931C20.3131 19.888 21.2731 19.056 21.2731 17.392C21.2731 16.576 21.0171 16 20.5051 15.664C19.9931 15.328 19.2571 15.16 18.2971 15.16H16.6651V19.888ZM27.4339 28V12.352H33.0739C33.9059 12.352 34.6819 12.432 35.4019 12.592C36.1379 12.752 36.7779 13.024 37.3219 13.408C37.8659 13.776 38.2979 14.272 38.6179 14.896C38.9379 15.52 39.0979 16.296 39.0979 17.224C39.0979 18.376 38.8419 19.328 38.3299 20.08C37.8339 20.816 37.1619 21.368 36.3139 21.736L39.8659 28H35.9059L32.9059 22.36H30.9619V28H27.4339ZM30.9619 19.552H32.7859C33.7139 19.552 34.4179 19.36 34.8979 18.976C35.3939 18.576 35.6419 17.992 35.6419 17.224C35.6419 16.456 35.3939 15.92 34.8979 15.616C34.4179 15.312 33.7139 15.16 32.7859 15.16H30.9619V19.552ZM48.5127 28.288C47.4567 28.288 46.4887 28.104 45.6087 27.736C44.7447 27.352 44.0007 26.808 43.3767 26.104C42.7527 25.4 42.2647 24.544 41.9127 23.536C41.5767 22.528 41.4087 21.384 41.4087 20.104C41.4087 18.824 41.5767 17.688 41.9127 16.696C42.2647 15.688 42.7527 14.848 43.3767 14.176C44.0007 13.488 44.7447 12.968 45.6087 12.616C46.4887 12.248 47.4567 12.064 48.5127 12.064C49.5687 12.064 50.5287 12.248 51.3927 12.616C52.2727 12.968 53.0247 13.488 53.6487 14.176C54.2727 14.864 54.7527 15.712 55.0887 16.72C55.4407 17.712 55.6167 18.84 55.6167 20.104C55.6167 21.384 55.4407 22.528 55.0887 23.536C54.7527 24.544 54.2727 25.4 53.6487 26.104C53.0247 26.808 52.2727 27.352 51.3927 27.736C50.5287 28.104 49.5687 28.288 48.5127 28.288ZM48.5127 25.24C49.5847 25.24 50.4327 24.784 51.0567 23.872C51.6807 22.944 51.9927 21.688 51.9927 20.104C51.9927 18.536 51.6807 17.312 51.0567 16.432C50.4327 15.552 49.5847 15.112 48.5127 15.112C47.4407 15.112 46.5927 15.552 45.9687 16.432C45.3447 17.312 45.0327 18.536 45.0327 20.104C45.0327 21.688 45.3447 22.944 45.9687 23.872C46.5927 24.784 47.4407 25.24 48.5127 25.24Z" fill="white"/>
</svg>

                            <h2>PRO</h2>
                        </div>
                        <p>Use this type to open a link to a webpage, contact form, or Youtube.</p>
                    
                    </div>

                    


                </div>
                <button>Show more</button>

            </Content>
            
        </Container>
    )
}

export default Type


const Container=styled.div`

width: 100%;
height: auto;
display: flex;
justify-content: center;
overflow: hidden;

padding-bottom: 150px;


`
const Content=styled.div`
width: 80%;
background-color: transparent;
position: relative;



.head{
    margin-top: 300px;
    padding: 0 100px;
    margin-bottom: 24px;
    h1{
        font-weight: 700;
        font-size: 48px;
        color: #344FA1;
        text-align:center;
        padding-bottom: 80px;
    }
    h4{
        font-weight: 400;
        font-size: 24px;
        color: #344FA1;
        text-align:center;
    }
}
.types{
    backdrop-filter: blur(50px);
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    grid-template-rows: auto;
    
    justify-content: center;
    padding: 80px;
    border-radius: 68px;
    border: 2px solid white;
    grid-gap: 50px;
    grid-row-gap: 100px;
    .type{
        height: 250px;
        width: 100%;
        background-color: white;
        border-radius: 50px;
        padding: 30px;
        box-sizing: border-box;
        box-shadow:0 6px 20px  #00000040;
        div{
            display: flex;
            align-items: center;
            margin-bottom: 26px;
            h2{
                color: #344FA1;
                font-size: 36px;
                font-weight: 700;
            }
            svg{
                height: 35px;
                width: 75px;
                object-fit: contain;
                
            }
        }
        p{
            color: #344FA1;
            font-size: 20px;
            font-weight: 400;
            padding: 0 10px;
        }
    }
}
.rectangle{
    position: absolute;
    z-index:-1;
    margin-top: 100px;
   img{
       transform: scaleY(1.9);
   }
}
.rectangle-2{
    position: absolute;
    bottom: -40px;
    right: -40px;
    z-index:-1;
}
button{
    position: absolute;
   margin-top: 70px;
   margin-left: 50%;
   margin-right:50%;
   transform: translate(-50%,-50%);
   width: 260px;
   height: 90px;
   background-color:#8566FF;
   border-radius: 50px;
    border: none;
    outline: none;
    color: white;
    font-weight: 700;
    font-size: 36px;
    z-index:2;
}

`