import React, { useState, useCallback } from "react";
import "./styles/SideBar.css";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { SideBarData} from './SideBarData'

function SideBar() {

	const [sidebar, setSideBar] = useState(false);

	const showSideBar = () => {
		if (sidebar === false)
				setSideBar(true);
			else if (sidebar === true)
				setSideBar(false);
	};

	return (
		<div className="sidebar">
			<ul>
				{SideBarData.map((val, key) => {
					return <li key={key}> {val.icon}</li>
				})
				}
			</ul>
		</div>
	)
}

export default SideBar;