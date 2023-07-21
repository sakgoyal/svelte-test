//https://react-icons.github.io/react-icons/icons?name=bs
import { useState } from "react";
import Typewriter from "typewriter-effect";
import Link from 'next/link'

export default function Home() {
  const [showButton, setShowButton] = useState(false);


  return (
    <div class="App max-h-screen">
      <header class="App-header">
        <div class="App">
            <div class = "homeText text-primary-50">
              <Typewriter
              onInit={(typewriter)=> {
              typewriter.changeDelay(50)
                .pauseFor(250)
                .typeString("The AMP Lab at Virginia Tech")
                .pauseFor(500)
                .callFunction(() => { setShowButton(true); })
                .start();
              }} />
          </div>
          <div style = {{padding: "50px"} }>
          {(showButton && <Link href="/getting_started" class = "btn">Getting Started</Link>) ||
          (!showButton && <Link href="/getting_started" style = {{visibility: "hidden"}} class = "btn">Getting Started</Link>)}
          </div>
        </div>
      </header>
    </div>
  );
}