import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import * as S from "./style/MyFollow.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import MyFollowingItem from "../../components/MyPage/MyFollowingItem";
import { useParams } from "react-router-dom";
import useGetToken from "../../hooks/useGetToken";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollowing: React.FC = () => {
  let { userId } = useParams() as { userId: any };
  const axiosPrivate = useAxiosPrivate();
  const token = useGetToken();
  const [followingData, setFollowingData] = useState<
    MyFollowerAndFollowingType[]
  >([]);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(`/following/${userId}`);
      setFollowingData(response.data.data);
    } catch (err) {}
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" title="팔로잉" />
      <S.Wrap>
        {followingData &&
          followingData.map((follower) => (
            <MyFollowingItem
              id={follower.id}
              nickName={follower.nickName}
              image={follower.image}
              isFollowing={follower.isFollowing}
            />
          ))}
      </S.Wrap>
    </>
  );
};

export default MyFollowing;
