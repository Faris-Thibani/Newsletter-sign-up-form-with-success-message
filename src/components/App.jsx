// import React, { useState } from 'react';
// import '../App.css';
// import illustration from '../assets/illustration-sign-up-desktop.svg';

// function App() {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   };

//   const handleDismiss = () => {
//     setIsSubmitted(false);
//   };

//   return (
//     <>
//       <div className="parent-container">
//         <div className="card-container">
//           <div className="text-container">
//             {!isSubmitted ? (
//               <>
//                 <h1>Stay Updated!</h1>
//                 <p>Join 60,000+ product managers receiving monthly updates on:</p>
//                 <ul>
//                   <li>
//                     <img
//                       className="icon"
//                       width="24"
//                       height="24"
//                       src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
//                       alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
//                     />
//                     Product discovery and building what matters
//                   </li>
//                   <li>
//                     <img
//                       className="icon"
//                       width="24"
//                       height="24"
//                       src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
//                       alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
//                     />
//                     Measuring to ensure updates are a success
//                   </li>
//                   <li>
//                     <img
//                       className="icon"
//                       width="24"
//                       height="24"
//                       src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
//                       alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
//                     />
//                     And much more!
//                   </li>
//                 </ul>
//                 <form className="sign-up-form" onSubmit={handleSubmit}>
//                   <label htmlFor="email">Email Address</label>
//                   <input required placeholder="email@company.com" className="email-input" type="email" id="email" name="email" />
//                   <button type="submit" className="btn">
//                     Subscribe to my monthly newsletter
//                   </button>
//                 </form>
//               </>
//             ) : (
//               <div className="success-card">
//                 <h1>Thank you for subscribing!</h1>
//                 <p>Please check your email for the confirmation email.</p>
//                 <button onClick={handleDismiss} className="dismiss-btn">
//                   Dismiss
//                 </button>
//               </div>
//             )}
//           </div>
//           {!isSubmitted && (
//             <div className="img-container">
//               <img src={illustration} className="illustration" alt="illustration" />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState , useEffect  } from 'react';
import '../App.css';
import illustration from '../assets/illustration-sign-up-desktop.svg';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    document.title = isSubmitted ? 'Thank You for Subscribing' : 'Newsletter Sign Up Form';
  }, [isSubmitted]);

  return (
    <>
      <div className="parent-container">
        <div className={!isSubmitted ? "card-container" : 'submited-parent'}>
          <div className={!isSubmitted ? 'text-container' : 'submited'}>
            {!isSubmitted ? (
              <>
                <h1>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                  <li>
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
                      alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
                    />
                    Product discovery and building what matters
                  </li>
                  <li>
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
                      alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
                    />
                    Measuring to ensure updates are a success
                  </li>
                  <li>
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
                      alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
                    />
                    And much more!
                  </li>
                </ul>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                  <label htmlFor="email">Email Address</label>
                  <input onChange={handleEmailChange} required placeholder="email@company.com" className="email-input" type="email" id="email" name="email" />
                  <button type="submit" className="btn">
                    Subscribe to my monthly newsletter
                  </button>
                </form>
              </>
            ) : (
              <div className="success-card">
                <img
                  width="44"
                  height="44"
                  src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-check-marketplace-creatype-filed-outline-colourcreatype.png"
                  alt="external-check-marketplace-creatype-filed-outline-colourcreatype"
                />
                <h1>Thank you for subscribing!</h1>
                <p>A confirmation email has been sent to <bold className='bold'>{email}</bold>. Please open it and click the button inside to confirm your subscription. </p>
                <button onClick={handleDismiss} className="diss-btn">
                  Dismiss
                </button>
              </div>
            )}
          </div>
          {!isSubmitted && (
            <div className="img-container">
              <img src={illustration} className="illustration" alt="illustration" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
