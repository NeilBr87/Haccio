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

    return (
        <div className='pages'>
            <h1>Outstanding issues forum</h1>
            <h3>All comments are moderated.</h3>
            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">
                        <p className="forum_content">Accidentally deleted all of my untracked folders with Git Clear - am I screwed?</p>
                        <div className="forumRow">
                            <h4 className="postAuthor">@Ihategit2023</h4>
                            <button className="forum_content" onClick={handleClick}>+</button>
                        </div>
                    </div>
                    {expanded && (
                        <div className="commentsSectionPost2">
                            <div className="expand-content">
                                    <p>Hi everyone. I was trying to remove some untracked changes so I used the git clear function to force it through. Here's the problem - I have quite a few folders for note purposes that I don't commit to a repo and it removed them. Am I screwed?</p>
                                    <h4>@Ihategit2023</h4>
                                </div>
                            <div className="expand-content">
                                <p>Unfortunatley so. Git clear is a very powerful, albeit misused, tool.</p>
                                <h4>@infinitejest541</h4>
                            </div>
                            <div className="expand-content">
                                <p>If you have backup software, now might be an optimal time to use it!</p>
                                <h4>@adamaronson10</h4>
                            </div>
                            <div className="expand-content">
                                <p>Try using the command git reflog to see if you can find the commit you deleted.</p>
                                <h4>@gitguru</h4>
                            </div>
                            <div className="expand-content">
                                <p>Thanks guys, that's very helpful!</p>
                                <h4>@Ihategit2023</h4>
                            </div>
                        </div>
                    )}
                    
                </div>

            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">
                        <p className="forum_content">My terminal keeps breaking down - my localhost on react is left without a connection! </p>
                        <div className="forumRow">
                            <h4 className="postAuthor">@cohort_14_warrior</h4>
                            <button className="forum_content" onClick={handleClick1}>+</button>
                        </div>
                    </div>
                    {expanded1 && (
                        <div className="commentsSectionPost2">
                            <div className="expand-content">
                                    <p>Anytime I'm working on React, I keep losing the live server. Especially when I go to commit my changes. It's very strange! Can anyone think why it might be happening?</p>
                                    <h4>@cohort_14_warrior</h4>
                                </div>
                            <div className="expand-content">
                                <p>Maybe you need to clear your cache?</p>
                                <h4>@jackSmithSurrey</h4>
                            </div>
                            <div className="expand-content">
                                <p>If it happens when you're committing, could it be that you're overriding your terminal?</p>
                                <h4>@philt11</h4>
                            </div>
                            <div className="expand-content">
                                <p>That seems likely! How do I go around it?</p>
                                <h4>@cohort_14_warrior</h4>
                            </div>
                            <div className="expand-content">
                                <p>Open up a second terminal when you want to commit. The terminal will continue in the background.</p>
                                <h4>@philt11</h4>
                            </div>
                            <div className="expand-content">
                                <p>Amazing. Thanks Phil!</p>
                                <h4>@cohort_14_warrior</h4>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className='forum'>
                <div className='forum__post'>
                    <div className="forum_content">
                        <p className="forum_content">Issues with my for loop?</p>
                        <div className="forumRow">
                            <h4 className="postAuthor">@dayOneLetsDoThis</h4>
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

                                    <h4>@dayOneLetsDoThis</h4>
                                    
                                </div>
                            <div className="expand-content">
                                <p>Array and length are divided with a dot, not a dash. But otherwise, you're good to go - keep on going!</p>
                                <h4>@bradbridgethelegend</h4>
                            </div>
                            <div className="expand-content">
                                <p>Brilliant, thanks Brad - that's perfect!</p>
                                <h4>@dayOneLetsDoThis</h4>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className='forum'>
    <div className='forum__post'>
        <div className="forum_content">
            <p className="forum_content">How do I debug my React code?</p>
            <div className="forumRow">
                <h4 className="postAuthor">@devGuru99</h4>
                <button className="forum_content" onClick={handleClick3}>+</button>
            </div>
        </div>
        {expanded3 && (
            <div className="commentsSectionPost3">
                <div className="expand-content">
                    <p>Hey guys, I'm trying to debug my React code, but I'm not sure where to start. Any tips?</p>
                    <h4>@devGuru99</h4>
                </div>
                <div className="expand-content">
                    <p>Have you tried using console.log() to log variables and see if they're what you expect them to be?</p>
                    <h4>@codeMaster2021</h4>
                </div>
                <div className="expand-content">
                    <p>Another thing you can try is using the React Developer Tools extension in Chrome, it's really helpful for debugging.</p>
                    <h4>@reactRookie</h4>
                </div>
            </div>
        )}
    </div>
</div>


<div className='forum__post'>
        <div className="forum_content">
            <p className="forum_content">How to use async/await?</p>
            <div className="forumRow">
                <h4 className="postAuthor">@jslover</h4>
                <button className="forum_content" onClick={handleClick4}>+</button>
            </div>
        </div>
        {expanded4 && (
            <div className="commentsSectionPost">
                <div className="expand-content">
                    <p>Hey everyone, I'm a bit confused about how to use async/await in my code. Can someone help me out?</p>
                    <h4>@jslover</h4>
                </div>
                <div className="expand-content">
                    <p>Sure, what exactly are you trying to do?</p>
                    <h4>@codeexpert</h4>
                </div>
                <div className="expand-content">
                    <p>Well, I have an API call that I need to make, and I want to wait for the response before doing anything else. But I'm not sure how to handle the promise returned by the API call.</p>
                    <h4>@jslover</h4>
                </div>
                <div className="expand-content">
                    <p>Got it. Here's an example:</p>
                    <span className="blackcode">async function fetchData() &#123;</span>
                    <span className="blackcode indent">const response = await fetch('https://example.com/data');</span>
                    <span className="blackcode indent">const data = await response.json();</span>
                    <span className="blackcode indent">return data;</span>
                    <span className="blackcode">&#125;</span>
                    <p>So in this code, fetchData is an async function that makes a GET request to an API and returns the response data. The await keyword is used to pause the function until the promise is resolved.</p>
                    <h4>@codeexpert</h4>
                </div>
                <div className="expand-content">
                    <p>Thanks, that makes sense now!</p>
                    <h4>@jslover</h4>
                </div>
            </div>
        )}
    </div>


    <div className='forum__post'>
    <div className="forum_content">
      <p className="forum_content">React useState not working?</p>
      <div className="forumRow">
        <h4 className="postAuthor">@reactGirl</h4>
        <button className="forum_content" onClick={handleClick5}>+</button>
      </div>
    </div>
    {expanded5 && (
      <div className="commentsSectionPost3">
        <div className="expand-content">
          <p>Hey folks, I'm trying to use useState in my React component, but it's not working as expected. Can anyone help me troubleshoot?</p>
          <h4>@reactGirl</h4>
        </div>
        <div className="expand-content">
          <p>Make sure you're importing useState from 'react' and that you're using it correctly. Can you share your code?</p>
          <h4>@reactFan</h4>
        </div>
        <div className="expand-content">
          <p>Yeah, check that you're destructuring the array correctly and that you're updating the state correctly. It's hard to say without seeing the code though.</p>
          <h4>@reactEnthusiast</h4>
        </div>
      </div>
    )}
  </div>


  <div className='forum__post'>
        <div className="forum_content">
            <p className="forum_content">How to format a date in JavaScript?</p>
            <div className="forumRow">
                <h4 className="postAuthor">@jsLearner123</h4>
                <button className="forum_content" onClick={handleClick6}>+</button>
            </div>
        </div>
        {expanded6 && (
            <div className="commentsSectionPost">
                <div className="expand-content">
                    <p>Hi everyone, I'm trying to format a date in JavaScript but I'm having some trouble.</p>
                    <p>Here's what I have so far:</p>
                    <span className="blackcode">const date = new Date();</span>
                    <span className="blackcode indent">const formattedDate = date.toLocaleDateString</span>
                    <p>However, when I output the formatted date, it's not coming out correctly.</p>
                    <p>Can anyone help me figure out what I'm doing wrong?</p>
                    <h4>@jsLearner123</h4>
                </div>
                <div className="expand-content">
                    <p>It looks like you're missing the timezone in the date formatting options. Try adding it like this:</p>
                    <span className="blackcode">const formattedDate = date.toLocaleDateString('en-US';</span>
                    <h4>@dateFormattingExpert</h4>
                </div>
                <div className="expand-content">
                    <p>Thanks, that worked perfectly!</p>
                    <h4>@jsLearner123</h4>
                </div>
            </div>
        )}
    </div>


            </div>
        </div>
    )
}

export default StaticForum