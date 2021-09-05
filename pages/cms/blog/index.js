
import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});
export default function example() {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	
	return (
            <>
            <div>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
            </div>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
            </>
        );
}