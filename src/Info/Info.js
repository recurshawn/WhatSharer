import React from 'react';

//import './Footer.css';

const Info = () => {
    return(
        <div>
            <h2 id="FAQs">🤔 FAQs</h2>
            <div className="messageBubble white">
                <h3>What is a WhatsApp Message URL?</h3>
                <p>A WhatsApp Message URL is a URL (link) that when visited enables the visitor to forward a pre-typed message to their WhatsApp contacts.
                <br/>Try it out! Type a message in the first box and hit the Share button or copy the URL generated and visit it.
                </p>
            </div>
            <div className="messageBubble white" id="where">
                <h3>Where can I use a WhatsApp message URL?</h3>
                <p>Whenever you need to spread a pre-typed message, use a WhatsApp Message URL! Type the message, copy the URL generated and share it. 
                    <br/>Some specific use cases would be:
                    <ul>
                        <li>You have an e-commerce/online store and want your customers to tell their friends about it. You can generate a link on WhatsAppr for your message and use that however you want on your site. Alternatively, you could use our default banner.</li>
                        <li>You want your social media audience to share a pre-typed message with their WhatsApp contacts. Sharing a WhatsApp message URL will allow them to just click the link and send the message directly.</li>
                        <li>If you want your friends on WhatsApp to forward a message on WhatsApp, you could just give them the URL and they can click it for single click forward v/s selecting the message and clicking forward. You also avoid those annoying "Forwarded" labels that way!</li>
                    </ul>
                    This is just scratching the surface of possibility! You are restricted by your own ingenuity! 🎨
                </p>
            </div>
            
            <div className="messageBubble white">
                <h3>What is WhatsAppr? How can I use WhatsAppr? Why would I want to use WhatsAppr?</h3>
                <p>WhatsAppr is a tool to make WhatsApp messaging easier. You can use it to send the same message to multiple people very quickly, very easily (bulk messaging) or to generate those insanely useful WhatsApp message URLs!
                </p>

                <p> WhatsAppr is (hopefully) very simple to use! 😋
                    <ol>
                        <li>Type your message in the first textbox</li>
                        <li>Hit the Share button to send the message to multiple people at once. OR Copy the message URL from the next textbox to use where you want! Alternatively, you could copy our HTML code to embed a simple banner on your site!</li>
                    </ol>
                </p>
                <p> Need reasons to use WhatsAppr? <a href="#where">Check the question above! </a>
                </p>
            </div>

            <div className="messageBubble white">
                <h3>Why/How should I do bulk messaging with WhatsAppr?</h3>
                <p>Sending a single message to multiple people is very easy on WhatsAppr. Just type your message in, click the Send button below it and then select the contacts/groups to send the message to. 
                <br/>You might also prefer this because it is easier to type in WhatsAppr's message box than the default WhatsApp text box.
                </p>
            </div>

            <div className="messageBubble white">
                <h3>Have questions, feedback or something to say?</h3>
                <p>Use this form: <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/62zX2Rf97wZJ5WGV9">https://forms.gle/62zX2Rf97wZJ5WGV9</a>
                <br/>Also feel free to reach out to me on Twitter <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Incept_shawn">@Incept_shawn!</a>
                </p>
            </div>

            <div className="messageBubble white">
                <h3>How can I support WhatsAppr?</h3>
                <p>Thank you for asking that! By using WhatsAppr, you are already supporting it! Additionally, you can also support us by:
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Incept_shawn">Telling us you like it.</a> Emotional support matters too!🙏</li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://forms.gle/62zX2Rf97wZJ5WGV9">Giving us feedback and suggestions</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/recurshawn/WhatsAppr">Contributing to the code base directly</a>, if you can. WhatsAppr is an Open Source project.</li>
                        <li>Monetary donations on GitHub</li>
                    </ul>
                </p>
            </div>
            
        </div>
    );
}

export default Info;