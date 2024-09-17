import { Typewriter } from 'react-simple-typewriter'

const Deshboard = () => {
  
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
    return (
        <div className="text-center ml-48">
          <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className="text-center mt-28 text-4xl font-bold text-blue-600">
          <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Wellcome To Our Deshboard','Wellcome To Our Deshboard']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>

          </h1>
        </div>
    );
};

export default Deshboard;