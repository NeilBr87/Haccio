import React, { useState } from "react";
import "./style.css"

function StaticForum() {

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);
    const [expanded6, setExpanded6] = useState(false);
    const [expanded7, setExpanded7] = useState(false);

    function handleClick() {
        setExpanded(!expanded);
      }
    
      function handleClick1() {
        setExpanded1(!expanded1);
      }

      function handleClick2() {
        setExpanded2(!expanded2);
      }

      function handleClick3() {
        setExpanded3(!expanded3);
      }

      function handleClick4() {
        setExpanded4(!expanded4);
      }

      function handleClick5() {
        setExpanded5(!expanded5);
      }

    function handleClick6() {
        setExpanded6(!expanded6);
    }

    function handleClick7() {
        setExpanded7(!expanded7);
    }

    return (
        <div className='pages'>
            <h1 className="topheader">Outstanding issues forum</h1>
            <h5>Key posts in the last 24 hours</h5>
            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">
                        <div className="topRow">
                            <span className="timeCircle">24m</span>
                            <p className="forum_content">Git Clear - am I screwed?</p>
                        </div>
                        <div className="forumRow">
                            <p className="postAuthor">@Ihategit2023</p>
                            <button className="forum_content" onClick={handleClick}>+</button>
                        </div>
                    </div>
                        {expanded && (
                        <div className="commentsSectionPost2">
                            <div className="expand-content">
                                <p>Hi everyone. I was trying to remove some untracked changes so I used the git clear function to force it through. Here's the problem - I have quite a few folders for note purposes that I don't commit to a repo and it removed them. Am I screwed?</p>
                                    <p className="commentAuthor">@Ihategit2023</p>
                            </div>
                            <div className="expand-content">
                                <p>Unfortunatley so. Git clear is a very powerful, albeit misused, tool.</p>
                                <p className="commentAuthor">@infinitejest541</p>
                            </div>
                            <div className="expand-content">
                                <p>If you have backup software, now might be an optimal time to use it!</p>
                                <p className="commentAuthor">@adamaronson10</p>
                            </div>
                            <div className="expand-content">
                                <p>Try using the command git reflog to see if you can find the commit you deleted.</p>
                                <p className="commentAuthor">@gitguru</p>
                            </div>
                            <div className="expand-content">
                                <p>Thanks guys, that's very helpful!</p>
                                <p className="commentAuthor">@Ihategit2023</p>
                            </div>
                        </div>
                    )}

                </div>

            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">

                        <div className="topRow">
                            <span className="timeCircle">46m</span>
                            <p className="forum_content">My terminal keeps breaking down - my localhost on react is left without a connection! </p>
                        </div>
                        <div className="forumRow">
                            <p className="postAuthor">@cohort_14_warrior</p>
                            <button className="forum_content" onClick={handleClick1}>+</button>
                        </div>
                    </div>
                    {expanded1 && (
                        <div className="commentsSectionPost2">
                            <div className="expand-content">
                                    <p>Anytime I'm working on React, I keep losing the live server. Especially when I go to commit my changes. It's very strange! Can anyone think why it might be happening?</p>
                                    <p className="postAuthor">@cohort_14_warrior</p>
                                </div>
                            <div className="expand-content">
                                <p>Maybe you need to clear your cache?</p>
                                <p className="postAuthor">@jackSmithSurrey</p>
                            </div>
                            <div className="expand-content">
                                <p>If it happens when you're committing, could it be that you're overriding your terminal?</p>
                                <p className="postAuthor">@philt11</p>
                            </div>
                            <div className="expand-content">
                                <p>That seems likely! How do I go around it?</p>
                                <p className="postAuthor">@cohort_14_warrior</p>
                            </div>
                            <div className="expand-content">
                                <p>Open up a second terminal when you want to commit. The terminal will continue in the background.</p>
                                <p className="postAuthor">@philt11</p>
                            </div>
                            <div className="expand-content">
                                <p>Amazing. Thanks Phil!</p>
                                <p className="postAuthor">@cohort_14_warrior</p>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">
                    <div className="topRow">
                            <span className="timeCircle">1h</span>
                            <p className="forum_content">Issues with my for loop?</p>
                        </div>
                        <div className="forumRow">
                            <p className="postAuthor">@dayOneLetsDoThis</p>
                            <button className="forum_content" onClick={handleClick2}>+</button>
                        </div>
                    </div>
                    {expanded2 && (
                        <div className="commentsSectionPost3">
                            <div className="expand-content">
                                    <p>Hey everybody! I'm trying to initiate a for loop, but something's wrong! Can you tell me what?</p>
                                    <span className="blackcode">for &#40; let i = 0, i &lt; array-length; i++&#41; &#123;</span>
                                    <span className="blackcode indent">count = count + 1</span>
                                    <span className="blackcode">&#125;</span>

                                    <p className="postAuthor">@dayOneLetsDoThis</p>
                                    
                                </div>
                            <div className="expand-content">
                                <p>Array and length are divided with a dot, not a dash. But otherwise, you're good to go - keep on going!</p>
                                <p className="postAuthor">@bradbridgethelegend</p>
                            </div>
                            <div className="expand-content">
                                <p>Brilliant, thanks Brad - that's perfect!</p>
                                <p className="postAuthor">@dayOneLetsDoThis</p>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className='forum'>
            <div className='forum__post'>
                <div className="forum_content">
                <div className="topRow">
                <span className="timeCircle">2h</span>
                <p className="forum_content">How do I debug my React code?</p>
            </div>
            <div className="forumRow">
                <p className="postAuthor">@devGuru99</p>
                <button className="forum_content" onClick={handleClick3}>+</button>
            </div>
            </div>
        {expanded3 && (
            <div className="commentsSectionPost3">
                <div className="expand-content">
                    <p>Hey guys, I'm trying to debug my React code, but I'm not sure where to start. Any tips?</p>
                    <p className="postAuthor">@devGuru99</p>
                </div>
                <div className="expand-content">
                    <p>Have you tried using console.log() to log variables and see if they're what you expect them to be?</p>
                    <p className="postAuthor">@codeMaster2021</p>
                </div>
                <div className="expand-content">
                    <p>Another thing you can try is using the React Developer Tools extension in Chrome, it's really helpful for debugging.</p>
                    <p className="postAuthor">@reactRookie</p>
                </div>
            </div>
        )}
    </div>
</div>


<div className='forum__post'>
        <div className="forum_content">
        <div className="topRow">
            <span className="timeCircle">4h</span>
            <p className="forum_content">How to use async/await?</p>
        </div>
            <div className="forumRow">
                <p className="postAuthor">@jslover</p>
                <button className="forum_content" onClick={handleClick4}>+</button>
            </div>
        </div>
        {expanded4 && (
            <div className="commentsSectionPost4">
                <div className="expand-content">
                    <p>Hey everyone, I'm a bit confused about how to use async/await in my code. Can someone help me out?</p>
                    <p className="postAuthor">@jslover</p>
                </div>
                <div className="expand-content">
                    <p>Sure, what exactly are you trying to do?</p>
                    <p className="postAuthor">@codeexpert</p>
                </div>
                <div className="expand-content">
                    <p>Well, I have an API call that I need to make, and I want to wait for the response before doing anything else. But I'm not sure how to handle the promise returned by the API call.</p>
                    <p className="postAuthor">@jslover</p>
                </div>
                <div className="expand-content">
                    <p>Got it. Here's an example:</p>
                    <span className="blackcode">async function fetchData() &#123;</span>
                    <span className="blackcode indent">const response = await fetch('https://example.com/data');</span>
                    <span className="blackcode indent">const data = await response.json();</span>
                    <span className="blackcode indent">return data;</span>
                    <span className="blackcode">&#125;</span>
                    <p>So in this code, fetchData is an async function that makes a GET request to an API and returns the response data. The await keyword is used to pause the function until the promise is resolved.</p>
                    <p className="postAuthor">@codeexpert</p>
                </div>
                <div className="expand-content">
                    <p>Thanks, that makes sense now!</p>
                    <p className="postAuthor">@jslover</p>
                    <br></br>
                </div>
                
            </div>
        )}
    </div>


    <div className='forum__post'>
    <div className="forum_content">
    <div className="topRow">
        <span className="timeCircle">6h</span>
        <p className="forum_content">React useState not working?</p>
    </div>
      <div className="forumRow">
        <p className="postAuthor">@reactGirl</p>
        <button className="forum_content" onClick={handleClick5}>+</button>
      </div>
    </div>
    {expanded5 && (
      <div className="commentsSectionPost3">
        <div className="expand-content">
          <p>Hey folks, I'm trying to use useState in my React component, but it's not working as expected. Can anyone help me troubleshoot?</p>
          <p className="postAuthor">@reactGirl</p>
        </div>
        <div className="expand-content">
          <p>Make sure you're importing useState from 'react' and that you're using it correctly. Can you share your code?</p>
          <p className="postAuthor">@reactFan</p>
        </div>
        <div className="expand-content">
          <p>Yeah, check that you're destructuring the array correctly and that you're updating the state correctly. It's hard to say without seeing the code though.</p>
          <p className="postAuthor">@reactEnthusiast</p>
        </div>
      </div>
    )}
  </div>


  <div className='forum__post'>
        <div className="forum_content">
        <div className="topRow">
                            <span className="timeCircle">12h</span>
                            <p className="forum_content">How to format a date in JavaScript?</p>
                        </div>
            
            <div className="forumRow">
                <p className="postAuthor">@jsLearner123</p>
                <button className="forum_content" onClick={handleClick6}>+</button>
            </div>
        </div>
        {expanded6 && (
            <div className="commentsSectionPost7">
                <div className="expand-content">
                    <p>Hi everyone, I'm trying to format a date in JavaScript but I'm having some trouble.</p>
                    <p>Here's what I have so far:</p>
                    <span className="blackcode">const date = new Date();</span>
                    <span className="blackcode indent">const formattedDate = date.toLocaleDateString</span>
                    <p>However, when I output the formatted date, it's not coming out correctly.</p>
                    <p>Can anyone help me figure out what I'm doing wrong?</p>
                    <p className="postAuthor">@jsLearner123</p>
                </div>
                <div className="expand-content">
                    <p>It looks like you're missing the timezone in the date formatting options. Try adding it like this:</p>
                    <span className="blackcode">const formattedDate = date.toLocaleDateString('en-US';</span>
                    <p className="postAuthor">@dateFormattingExpert</p>
                </div>
                <div className="expand-content">
                    <p>Thanks, that worked perfectly!</p>
                    <p className="postAuthor">@jsLearner123</p>
                </div>
            </div>
        )}
    </div>
            
            <div>
            {expanded7 && (
                <div>
                    <p>Hello</p>
                </div>
            )}
            </div>
                
    </div>
    
        <div className='submissionform'>
            <h4 className="submissionheader">Submit a new post</h4>
            <form className="myform">
                <input className="postusername" type="text" placeholder="Username" />
                <input className="postcomment" placeholder="Comment"></input>
                <button className="forum_content" onClick={handleClick7}>+</button>
            </form>
        </div>
     </div>



    )
}

export default StaticForum