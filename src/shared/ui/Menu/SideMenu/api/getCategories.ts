const getCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/categories`
    );

    if (!response.ok) {
      throw new Error("fetch error!");
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export default getCategories;
