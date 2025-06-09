import MovieCard from "@/components/movieCard";
import SearchInput from "@/components/searchInput";
import TrendingMovieCard from "@/components/trendingMovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies, upComingMovies } from "@/services/api";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();

  const { data, loading, error } = useFetch(() => fetchMovies({ query: "" }));

  const {
    data: upcomingMovies,
    loading: upcomingLoading,
    error: upcomingError,
  } = useFetch(() => upComingMovies());

  return (
    <View className="flex-1 bg-[#030114]">
      <Image source={images.bg} className=" w-full absolute z-0" />

      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 h-8 mx-auto mt-24 mb-10" />
        <SearchInput onPress={() => router.push("/search")} autoFocus={false} />
        <View className="flex-1 justify-center items-center">
          {upcomingLoading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) : upcomingError ? (
            <Text className="text-white text-3xl text-center font-bold my-10">
              Error
            </Text>
          ) : (
            <>
              <Text className="text-white text-3xl font-bold my-10">
                Upcoming Movies
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={upcomingMovies}
                renderItem={({ item }) => <TrendingMovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                className="mt-2 "
                contentContainerStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
              />
            </>
          )}
        </View>
        <View className="flex-1 justify-center items-center">
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) : error ? (
            <Text className="text-white">Error</Text>
          ) : (
            <View className="justify-center items-center ">
              <>
                <Text className="text-white text-3xl font-bold my-10">
                  Latest Movies
                </Text>

                <FlatList
                  data={data?.results}
                  renderItem={({ item }) => <MovieCard {...item} />}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10,
                  }}
                  className="mt-2"
                  scrollEnabled={false}
                />
              </>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default Index;
