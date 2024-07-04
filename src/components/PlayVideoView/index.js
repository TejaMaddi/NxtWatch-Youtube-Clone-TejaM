import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndContext from '../../context/ThemeAndContext'

import {
    VideoPlayer,
    PlayVideoTitle,
    PlayVideoStatus,
    PlayVideoStatusContainer,
    PlayVideoDot,
    PlaySocialButtonsContainer,
    SocialButton,
    ButtonText,
    HrLine,
    ChannelImage,
    ChannelContainer,
    ChannelInfo,
    ChannelName,
    ChannelSubscribers,
    ChannelDescription,
    BtnContainer
} from './styledComponents'

const PlayVideoView= props=>{
    const {videoDetails, isLiked, isDisLiked, clickLiked,clickDisLiked}=props

const onClickLike =()=>{
    clickLiked()
}

const onClickDislike =()=>{
    clickDisLiked()
}

return(
    <ThemeAndContext.Consumer>
        {value=>{
            const {isDarkTheme,addVideo,savedVideos}=value
            const textColor = isDarkTheme? "#64748b" : "#231f20"
            let isSaved 
            const index=savedVideos.findIndex(each=>each.id===videoDetails.id)
            if (index===-1){
                isSaved=false
            }else{
                isSaved=true
            }
            const saveIconColor = isSaved? "#2563eb":"textColor"

            const onClickSave=()=>{
                addVideo(videoDetails)
            }
            return(
                <VideoPlayer>
                    <ReactPlayer url={videoDetails.videoUrl} controls width="100%"/>
                    <PlayVideoTitle color={textColor}>
                        {videoDetails.title}
                    </PlayVideoTitle>
                    <PlayVideoStatusContainer>
                        <PlayVideoStatus color={textColor}>
                            {videoDetails.viewCount} views
                            <PlayVideoDot> &#8226</PlayVideoDot>
                            {videoDetails.publishedAt}
                        </PlayVideoStatus>
                    <PlaySocialButtonsContainer>
                    <BtnContainer>
                        <SocialButton type="button" onClick={onClickLike} color={isLiked? '#2563eb':"#64748b"}>
                            <AiOutlineLike size={25}/>
                            <ButtonText>Like</ButtonText>
                        </SocialButton>
                    </BtnContainer>
                    <BtnContainer>
                        <SocialButton type="button" onClick={onClickDislike} color={isDisLiked? '#2563eb':"#64748b"}>
                            <AiOutlineDislike size={25}/>
                            <ButtonText>Dislike</ButtonText>
                        </SocialButton>
                    </BtnContainer>
                    <BtnContainer>
                        <SocialButton type="button" onClick={onClickSave} color={saveIconColor}>
                            <BiListPlus size={25}/>
                            <ButtonText>{isSaved? 'Saved' : 'Save'}</ButtonText>
                        </SocialButton>
                    </BtnContainer>
                    </PlaySocialButtonsContainer>
                    </PlayVideoStatusContainer>
                    <HrLine/>
                    <ChannelContainer>
                        <ChannelImage src={videoDetails.profileImageUrl} alt="channel logo"/>
                        <ChannelInfo>
                            <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                            <ChannelSubscribers color={textColor}>
                                {videoDetails.subscribeCount} Subscribers
                            </ChannelSubscribers>
                            <ChannelDescription color={textColor}>
                                {videoDetails.description}
                            </ChannelDescription>
                        </ChannelInfo>
                    </ChannelContainer>
                </VideoPlayer>
            )
        }}
    </ThemeAndContext.Consumer>
)
}

export default PlayVideoView