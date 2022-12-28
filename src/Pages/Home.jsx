import React from 'react'
// import ProfileTab from "../components/ProfileTab";
// import SettingPane from "../components/SettingPane";
import SideNav from "../components/SideNav";
import StartConvoSection from "../components/StartConvoSection";
// import BookmarkPane from "../components/BookmarkPane";
// import CallTab from "../components/CallTab";
import ChatTab from "../components/ChatTab";
// import ContactTab from "../components/ContactTab";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
        
          <div class="layout-wrapper d-lg-flex">
            <div class="side-menu flex-lg-column">
              <Logo />
              <SideNav />
            </div>
            <div class="chat-leftsidebar">
              <div class="tab-content">
                {/* <ProfileTab /> */}
                <ChatTab />
                {/* <ContactTab /> */}
                {/* <CallTab /> */}
                {/* <BookmarkPane /> */}
                {/* <SettingPane /> */}
              </div>
            </div>
            <div class="user-chat w-100 overflow-hidden">
              <div class="chat-content d-lg-flex">
                <StartConvoSection />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Home