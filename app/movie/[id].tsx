import MovieDetailCard from "@/components/movieDetailCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { movieDetails } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const Movie = () => {
  const { id } = useLocalSearchParams();

  const { data, loading, error } = useFetch(() => movieDetails(id as string));

  return (
    <View className="flex-1 relative bg-[#030114]">
      <Pressable
        onPress={() => router.back()}
        className="sticky top-24 left-5 z-10 text-white text-2xl  flex-row items-center gap-2 font-bold"
      >
        <Image
          source={icons.arrow}
          tintColor="white"
          className="w-6 h-6 rotate-180"
          resizeMode="contain"
        />
        <Text className="text-white text-2xl font-bold">Back</Text>
      </Pressable>
      <Image source={images.bg} className=" w-full absolute z-0" />

      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 mt-24 h-8 mx-auto mb-10" />

        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : !error ? (
          <MovieDetailCard
            poster_path={data?.poster_path}
            title={data?.title}
            vote_average={data?.vote_average}
            release_date={data?.release_date}
            adult={data?.adult}
            backdrop_path={data?.backdrop_path}
            belongs_to_collection={data?.belongs_to_collection}
            budget={data?.budget}
            genres={data?.genres}
            homepage={data?.homepage}
            id={data?.id}
            imdb_id={data?.imdb_id}
            original_language={data?.original_language}
            original_title={data?.original_title}
            overview={data?.overview}
            popularity={data?.popularity}
            production_companies={data?.production_companies}
            production_countries={data?.production_countries}
            revenue={data?.revenue}
            runtime={data?.runtime}
            spoken_languages={data?.spoken_languages}
            status={data?.status}
            tagline={data?.tagline}
            video={data?.video}
            vote_count={data?.vote_count}
          />
        ) : (
          <Text className="text-white text-2xl font-bold">Error</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Movie;
