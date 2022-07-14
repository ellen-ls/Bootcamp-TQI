import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

export const WrapperTabs = styled(Tabs)`
font-size:16px;
width:100%;
`

export const WrapperTabList = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0;
`
WrapperTabList.tabsRole = "TabList";


export const WrapperTab = styled(Tab)`
border-radius:16px;
border:1px solid #6959CD;
padding:8px;
user-select:none;
cursor: pointer;
z-index:99999;
background-color:white;
margin:8px;

&:focus{
    outline:none;
}

&.is-selected{
    box-shadow:5px 3px 5px #483D8B;
}
`
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
display:none;


&.is-selected{
    display:block;
}
`
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`