import MovieCard from "@/components/movieCard";
import SearchInput from "@/components/searchInput";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [query, setQuery] = useState("");

  const { data, loading, error, refetch, reset } = useFetch(
    () => fetchMovies({ query }),
    false
  );

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (query.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <View className="flex-1 bg-[#030014]">
      <Image source={images.bg} className=" w-full absolute z-0" />
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
        className="mt-2 pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View className="flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h-8" />
            </View>
            <View className="my-10 px-5">
              <SearchInput
                autoFocus={true}
                value={query}
                onChangeText={(text) => setQuery(text)}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="mt-10 self-center"
              />
            )}

            {error && (
              <Text className="text-red-500 text-lg">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              query.trim() &&
              data?.results?.length > 0 && (
                <Text className="text-white text-xl mb-10 font-bold">
                  Search results for{" "}
                  <Text className="text-violet-300 text-2xl font-bold">
                    {query}
                  </Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center ">
            <Text className="text-white">No results </Text>
          </View>
        }
      />
    </View>
  );
};

export default Search;
