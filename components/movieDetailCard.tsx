import { icons } from "@/constants/icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const MovieDetailCard = ({
  poster_path,
  title,
  vote_average,
  release_date,
  adult,
  backdrop_path,
  genres,
  overview,
  runtime,
  status,
  tagline,
  video,
  vote_count,
  production_companies,
  spoken_languages,
  homepage,
  imdb_id,
}: MovieDetails) => {
  return (
    <ScrollView className="flex-1">
      <View className="relative ">
        <Image
          source={{
            uri: backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : "https://via.placeholder.com/150",
          }}
          className="w-full h-72 rounded-xl"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#030014] to-transparent h-32" />
      </View>

      <View className="px-5 -mt-20">
        <View className="flex-row gap-5  mt-5">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://via.placeholder.com/150",
            }}
            className="w-32 h-48 rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-1 justify-end ">
            <Text className="text-white text-2xl font-bold" numberOfLines={2}>
              {title}
            </Text>
            {tagline && (
              <Text className="text-gray-300  italic mt-1" numberOfLines={2}>
                {tagline}
              </Text>
            )}
            <View className="flex-row items-center gap-2 mt-2">
              <View className="flex-row items-center gap-1">
                <Image source={icons.star} className="size-5" />
                <Text className="text-white text-lg">
                  {Math.round(vote_average / 2)}
                </Text>
                <Text className="text-gray-300 text-sm">({vote_count})</Text>
              </View>
              <Text className="text-gray-300">•</Text>
              <Text className="text-gray-300">
                {release_date?.split("-")[0]}
              </Text>
              {adult && (
                <>
                  <Text className="text-gray-300">•</Text>
                  <Text className="text-red-500">18+</Text>
                </>
              )}
              {video && (
                <>
                  <Text className="text-gray-300">•</Text>
                  <Text className="text-blue-400">Video</Text>
                </>
              )}
            </View>
            <View className="flex-row flex-wrap gap-2 mt-2">
              {genres?.map((genre) => (
                <View
                  key={genre.id}
                  className="bg-[#151314] px-3 py-1 rounded-full"
                >
                  <Text className="text-gray-300">{genre.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-white text-xl font-bold mb-2">Overview</Text>
          <Text className="text-gray-300 leading-6">{overview}</Text>
        </View>

        <View className="flex-row flex-wrap gap-4 mt-6">
          <View className="flex-1 bg-[#151314] p-4 rounded-lg min-w-[150px]">
            <Text className="text-gray-300 text-sm">Status</Text>
            <Text className="text-white text-lg mt-1">{status}</Text>
          </View>
        </View>

        {production_companies?.length > 0 && (
          <View className="mt-6">
            <Text className="text-white text-xl font-bold mb-2">
              Production Companies
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {production_companies.map((company) => (
                <View
                  key={company.id}
                  className="bg-[#151314] px-3 py-2 rounded-lg"
                >
                  <Text className="text-gray-300">{company.name}</Text>
                  {company.origin_country && (
                    <Text className="text-gray-400 text-sm">
                      {company.origin_country}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {spoken_languages?.length > 0 && (
          <View className="mt-6">
            <Text className="text-white text-xl font-bold mb-2">Languages</Text>
            <View className="flex-row flex-wrap gap-2">
              {spoken_languages.map((language) => (
                <View
                  key={language.iso_639_1}
                  className="bg-[#151314] px-3 py-1 rounded-full"
                >
                  <Text className="text-gray-300">{language.english_name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {(homepage || imdb_id) && (
          <View className="mt-6 mb-8">
            <Text className="text-white text-xl font-bold mb-2">Links</Text>
            <View className="flex-row gap-4">
              {homepage && (
                <View className="bg-[#151314] px-4 py-2 rounded-lg">
                  <Text className="text-blue-400">Homepage</Text>
                </View>
              )}
              {imdb_id && (
                <View className="bg-[#151314] px-4 py-2 rounded-lg">
                  <Text className="text-yellow-400">IMDb</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieDetailCard;
