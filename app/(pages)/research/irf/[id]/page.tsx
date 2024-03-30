import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/irf.jpeg'

export default function page({params}: {params: {id:string}}) {
  return (
    <div className='w-full h-full my-5'>
        <div className='flex flex-row'>
            <div className='w-[14vw] border-2 mx-2'>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Collaborators</h1>
                    <div className='mb-3 text-sm'>
                        <h1>Dr. Jasper Ondulo</h1>
                        <h1 className='font-semibold'>Coordinator</h1>
                    </div>
                    <div className='mb-3 text-sm'>
                        <h1>Dr. Dorothy Rambim</h1>
                        <h1 className='font-semibold'>Project Lead</h1>
                    </div>
                    <div className='mb-3 text-sm'>
                        <h1>Dr. Raphael Angulu</h1>
                        <h1 className='font-semibold'>Project Lead</h1>
                    </div>
                </div>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Partners</h1>
                    <Link href={''}><h1 className='mb-3 text-sm text-sky-500 hover:text-sky-300'>University of Kwazulu Natal</h1></Link>
                    <Link href={''}><h1 className='mb-3 text-sm text-sky-500 hover:text-sky-300'>Havard University</h1></Link>
                    <Link href={''}><h1 className='mb-3 text-sm text-sky-500 hover:text-sky-300'>University of Manchester</h1></Link>
                    <Link href={''}><h1 className='mb-3 text-sm text-sky-500 hover:text-sky-300'>University of Newcastle</h1></Link>
                </div>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Contact Details</h1>
                    <h1 className='mb-3 text-sm'>Department of Computer Science</h1>
                    <h1 className='mb-3 text-sm'>School of Computing and Informatics (MMUST)</h1>
                    <h1 className='mb-3 text-sm'>P.O. Box 190-50100</h1>
                    <h1 className='mb-3 text-sm'>Kakamega, KENYA</h1>
                    <h1 className='mb-3 text-sm'>Office no. SPD Block B Room 102</h1>
                    <h1 className='mb-3 text-sm'>Kakamega-Webuye Road</h1>
                    <h1 className='mb-3 text-sm'>Email: <span className='text-sky-300'>researchersemail@gmail.com</span></h1>
                </div>
            </div>
            <div className='w-full h-full border-2 mx-2'>
                <div className='px-3 my-3'>
                    <h1 className='text-xl font-bold mb-3'> 
                        Enhancing Cybersecurity in Internet of Things (IoT) Devices through Blockchain Technology
                    </h1>
                    <h1 className='text-lg font-semibold opacity-70 mb-3'>About the Project</h1>
                    <h1 className='font-bold mb-3'>Brief description</h1>
                    <p>
                        The project aims to revolutionize the security landscape of Internet of Things (IoT) devices through the integration of blockchain technology. As IoT devices continue to proliferate across various sectors, concerns about their susceptibility to cyber threats have become increasingly pronounced. Traditional centralized architectures present vulnerabilities that can compromise the integrity, confidentiality, and availability of IoT ecosystems. In response to these challenges, this research proposes a decentralized and immutable framework leveraging blockchain to enhance the security, privacy, and trustworthiness of IoT environments.
                        The project&lsquo;s multidisciplinary approach combines expertise in computer science, cryptography, and cybersecurity to design and develop a prototype blockchain-based IoT security framework. Through a comprehensive methodology encompassing requirement analysis, system design, prototype development, testing, and validation, the research aims to address key security challenges specific to IoT devices. The framework will incorporate decentralized identity management, secure communication protocols, and tamper-resistant data storage mechanisms to mitigate risks associated with centralized control and enhance the resilience of IoT ecosystems against cyber threats.
                        By providing a sustainable solution to the evolving cybersecurity challenges in IoT environments, the project seeks to foster greater confidence in the adoption of IoT technologies across industries. The outcomes of this research have the potential to redefine the way IoT devices are secured and managed, paving the way for a more resilient, trustworthy, and secure IoT infrastructure. Through collaboration, innovation, and continuous improvement, the project aims to contribute to the advancement of IoT security practices and promote the widespread adoption of blockchain technology in securing interconnected devices in the digital age.    
                    </p>
                    <Image src={Banner} alt='Project-Banner' width={1400} height={1400} className='p-10 w-full h-[80vh]'></Image>
                    <h1 className='font-bold mb-3 text-lg'>Detailed Description</h1>
                    <h1 className='font-bold mb-3'>Project Background</h1>
                    <p>
                        The proliferation of IoT devices has revolutionized the way we interact with technology, enabling seamless connectivity and automation. However, the centralized nature of traditional IoT architectures poses significant security risks, including data breaches, unauthorized access, and device manipulation. Blockchain technology offers a promising solution by providing a tamper-proof and transparent ledger that records all transactions and interactions among IoT devices. By decentralizing trust and consensus mechanisms, blockchain can mitigate the risks associated with centralized control and enhance the security and privacy of IoT ecosystems.
                    </p>
                    <h1 className='font-bold mb-3'>Problem Statement</h1>
                    <p>
                        The security vulnerabilities inherent in traditional IoT architectures pose significant challenges to the integrity, confidentiality, and availability of IoT devices and data. Current approaches to IoT security, such as encryption and authentication protocols, are often insufficient to address the evolving threat landscape. Additionally, the centralized nature of IoT systems creates single points of failure and susceptibility to cyberattacks. There is a pressing need for innovative solutions that can bolster the cybersecurity of IoT devices and protect against emerging threats.
                    </p>
                    <h1 className='font-bold mb-3'>Justification</h1>
                    <p>
                    The proposed research is timely and relevant given the exponential growth of IoT deployments and the escalating cybersecurity risks associated with interconnected devices. By leveraging blockchain technology, this project seeks to enhance the security, privacy, and trustworthiness of IoT ecosystems, thereby fostering greater confidence in the adoption of IoT technologies across various sectors. The outcomes of this research have the potential to revolutionize the way IoT devices are secured and managed, paving the way for a more resilient and trustworthy IoT infrastructure.
                    </p>
                    <h1 className='font-bold mb-3'>Approach</h1>
                    <p>
                    The research will adopt a multidisciplinary approach, combining expertise in computer science, cryptography, and cybersecurity. The project will begin with a comprehensive review of existing literature and case studies to identify key security challenges and potential solutions in the context of IoT and blockchain integration. This will be followed by the design and development of a prototype blockchain-based framework for securing IoT devices. The framework will incorporate decentralized identity management, secure communication protocols, and tamper-resistant data storage mechanisms.
                    </p>
                    <h1 className='font-bold mb-3'>Methodology</h1>
                    <ol>
                        <li>
                        <span className='font-bold'>Requirement Analysis:</span> Identify the security requirements and challenges specific to IoT devices and applications.
                        </li>
                        <li>
                        <span className='font-bold'>System Design:</span> Design a blockchain-based architecture for securing IoT devices, including consensus mechanisms, smart contracts, and cryptographic protocols.
                        </li>
                        <li>
                        <span className='font-bold'>Prototype Development:</span> Develop a working prototype of the blockchain-based IoT security framework, integrating with existing IoT devices and platforms.
                        </li>
                        <li>
                        <span className='font-bold'>Testing and Evaluation:</span> Conduct comprehensive testing and evaluation of the prototype to assess its effectiveness in addressing security vulnerabilities and mitigating threats.
                        </li>
                        <li>
                        <span className='font-bold'>Deployment and Validation:</span> Deploy the prototype in real-world scenarios and gather feedback from stakeholders to validate its usability, scalability, and security.
                        </li>
                    </ol>
                    <h1 className='font-bold mb-3'>Project Sustainability</h1>
                    <p>
                    The proposed framework aims to provide a sustainable solution to the ongoing cybersecurity challenges in IoT environments. By leveraging blockchain technology, the framework offers a decentralized and immutable platform for securing IoT devices, ensuring long-term integrity and trustworthiness. Additionally, the open-source nature of the project encourages collaboration and contributions from the wider community, fostering continuous improvement and innovation in IoT security practices.
                    </p>
                    <h1 className='font-bold mb-3'>System Requirements</h1>
                    <p>The system requirements for the blockchain-based IoT security framework include:</p>
                        <li>Compatibility with existing IoT devices and platforms</li>
                        <li>Scalability to accommodate a large number of devices and transactions</li>
                        <li>Low latency and high throughput for real-time communication</li>
                        <li>Support for interoperability and standards compliance</li>
                        <li>Robust identity management and access control mechanisms</li>
                        <li>Integration with existing cybersecurity tools and protocols</li>
                    <h1 className='font-bold mb-3'>System Design</h1>
                    <p>
                        The system design will involve the creation of a decentralized architecture based on blockchain technology. This will include the design of smart contracts, consensus mechanisms, and cryptographic protocols to ensure the security and integrity of IoT device communications and data.
                    </p>
                    <h1 className='font-bold mb-3'>System Development</h1>
                    <p>
                    The system development phase will focus on implementing the designed architecture and protocols into a working prototype. This will involve programming smart contracts, developing blockchain nodes, and integrating with IoT devices and platforms. Continuous testing and refinement will be conducted to ensure the reliability, efficiency, and usability of the system.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}





// const [visible, setVisible] = useState(false);
//     const buttonData = [
//         { text: 'Button 1' },
//         { text: 'Button 2' },
//         { text: 'Button 3' },
//         { text: 'Button 4' },
//       ];
//     const toggleVisible = () => {
//         setVisible((prev) => !prev);
//     }
//   return (
//     <>
//     <div className='w-full h-full flex  overflow-hidden gap-1 mb-0'>
//         <div className=" w-[16vw] max-[768px]:hidden bg-white">
//             <ResearchSideNav/>
//         </div>
//         <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll">
//             <div className='my-10 mx-10'>
//                 <h1 className='text-3xl font-bold my-5 uppercase'>National Research Fund (NRF)</h1>
//                 <p className='my-3'>
//                     The National Research Fund (NRF) is a State Corporation established under the Science Technology and Innovation (ST&I) Act No. 28, Section 32 of 2013. The Fund is mandated to facilitate research to advance Science, Technology and Innovation.
//                     Part VII of the ST&I Act, 2013, stipulates that the Fund will constitute a sum of money amounting to 2% of the country&lsquo;s Gross Domestic Product every year and such other monies designated for the Fund by Parliament, donations, endowment or grants or gifts designated for the Fund.
//                 </p>
//                 <div className='py-5'>
//                     <h1 className='text-3xl font-bold uppercase mb-5'>Researches Won</h1>
//                     <div className='w-full my-5'>
//                     <div className='bg-gray-900 text-white w-full h-10 relative'>
//                         <h1 className='my-3 absolute text-xl px-5'>2023-2024</h1>
//                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
//                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
//                     </div>
//                     <div className={clsx(`flex-col mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
//                         <Link href={''} className='my-1'><h1>September</h1></Link>
//                         <Link href={''} className='my-1'><h1>June</h1></Link>
//                         <Link href={''} className='my-1'><h1>May</h1></Link>
//                         <Link href={''} className='my-1'><h1>January</h1></Link>
//                     </div>
//                     </div>
//                     <div className='w-full my-5'>
//                     <div className='bg-gray-900 text-white w-full h-10 relative'>
//                         <h1 className='my-3 absolute text-xl px-5'>2022-2023</h1>
//                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
//                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
//                     </div>
//                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
//                         <Link href={''} className='my-1'><h1>September</h1></Link>
//                         <Link href={''} className='my-1'><h1>June</h1></Link>
//                         <Link href={''} className='my-1'><h1>May</h1></Link>
//                         <Link href={''} className='my-1'><h1>January</h1></Link>
//                     </div>
//                     </div>
//                     <div className='w-full my-5'>
//                     <div className='bg-gray-900 text-white w-full h-10 relative'>
//                         <h1 className='my-3 absolute text-xl px-5'>2021-2022</h1>
//                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
//                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
//                     </div>
//                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
//                         <Link href={''} className='my-1'><h1>September</h1></Link>
//                         <Link href={''} className='my-1'><h1>June</h1></Link>
//                         <Link href={''} className='my-1'><h1>May</h1></Link>
//                         <Link href={''} className='my-1'><h1>January</h1></Link>
//                     </div>
//                     </div>
//                     <div className='w-full my-5'>
//                     <div className='bg-gray-900 text-white w-full h-10 relative'>
//                         <h1 className='my-3 absolute text-xl px-5'>2020-2021</h1>
//                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
//                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
//                     </div>
//                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
//                         <Link href={''} className='my-1'><h1>September</h1></Link>
//                         <Link href={''} className='my-1'><h1>June</h1></Link>
//                         <Link href={''} className='my-1'><h1>May</h1></Link>
//                         <Link href={''} className='my-1'><h1>January</h1></Link>
//                     </div>
//                     </div>
//                 </div>
//                 <div className='w-full h-auto my-5 border-2'>
//                     <div className='p-5'>
//                         <h1 className='text-3xl font-bold  mb-5'>All NRF Projects</h1>
//                         <div className='border-2 my-5'>
//                             <Link href={''}>
//                             <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
//                             A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
//                             </h1>
//                             <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
//                             </Link>
//                         </div>
//                         <div className='border-2 my-5'>
//                             <Link href={''}>
//                             <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
//                             A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
//                             </h1>
//                             <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
//                             </Link>
//                         </div>
//                     </div>