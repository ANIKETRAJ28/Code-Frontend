import DOMPurify from 'dompurify';
import { useState } from 'react';
import AceEditor from 'react-ace';
import ReactMarkdown from 'react-markdown';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/ext-language_tools';

export default function ProblemDescription({description}) {

  const sanitizedMarkdown = DOMPurify.sanitize(description);
  const [activeTab, setActiveTab] = useState('Description');
  const [isDragging, setIsDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);

  const startDragging = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const stopDragging = (e) => {
    if(isDragging) {
      setIsDragging(false);
    }
  };

  const onDrag = (e) => {
    if(!isDragging) return;
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if(newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <div 
      className="container flex w-full h-[100vh]"
      onMouseMove={onDrag}
      onMouseUp={stopDragging}
    >
      <div className="left-panel h-full overflow-auto" style={{width: `${leftWidth}%`}}>
        <div className="tabs">
          <button onClick={() => setActiveTab('Description')}>Desccription</button>
          <button onClick={() => setActiveTab('Editorial')}>Editorial</button>
          <button onClick={() => setActiveTab('Sublitions')}>Submition</button>
        </div>
        <div className="markdown-viewer basis-1/2">
          <ReactMarkdown>
            {sanitizedMarkdown}
          </ReactMarkdown>
        </div>
      </div>
      <div 
        className="divider cursor-col-resize h-full w-2 hover:bg-black transition-all ease-linear duration-200"
        onMouseDown={startDragging}
      ></div>
      <div className="right-panel h-full overflow-auto" style={{width: `${100-leftWidth}%`}}>
        <AceEditor
          mode='javascript'
          theme='monokai'
          name='codeEditor'
          className='editor'
          style={{ width: '100%'}}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            fontSize: 16
          }}
        />
      </div>
    </div>
  );
}