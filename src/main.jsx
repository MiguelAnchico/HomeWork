import React from 'react';
import ReactDOM from 'react-dom/client';
import { GiftExpertApp } from './GiftExpertApp';

import './index.css';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
import { FocusScreen } from './components/FocusScreen';
import { Memorize } from './components/Memorize';
import { MemoHook } from './components/MemoHook';
import { CallbackHook } from './components/CallbackHook';
import { Father } from './components/Father';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Father />
	</React.StrictMode>
);
