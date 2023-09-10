import axios from "axios";
import LoadingCard from "components/loaders/LoadingCard"
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get_categories } from "redux/actions/categories"
import { Link } from "react-router-dom";

function AddABook({get_categories, categories}){
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [published, setPublished] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    useEffect(() =>{
        get_categories()
    },[])

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setThumbnail(file)

            const reader = new FileReader();
            reader.onload = () => {
                setThumbnailPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleThumbnailDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setThumbnail(file)
    
            const reader = new FileReader();
            reader.onload = () => {
            setThumbnailPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveThumbnail = () => {
        setThumbnail(null)
        setThumbnailPreview(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const response = await axios.post("http://localhost:8000/api/book/addbook/", {
                title,
                description,
                author,
                category,
                published,
                thumbnail,
            });
            if (response.ok) {
                const data = await response.json();
                if (data.user_create) {
                    // Redirige al usuario a la página de inicio después del registro exitoso
                    // o a cualquier otra página que desees.
                    return (
                        <Link to="/">Redireccionando a la página de inicio...</Link>
                    );
                }
            }
        }
        catch (error){
            console.log(error)
        }
    };


    return(
        <form className="mx-4 md:mx-auto md:max-w-2xl">
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
            <h3 className="mt-3 text-base font-semibold leading-7 text-gray-900">Add a book</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Use the following form to complete the information of the book.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                        type="text"
                        required
                        name="title"
                        id="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="title"
                        value={title}
                        onChange={({target}) => setTitle(target.value)}
                    />
                    </div>
                </div>
                </div>

                <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>
                <div className="mt-2">
                    <textarea
                    id="description"
                    required
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    placeholder="description"
                    value={description}
                    onChange={({target}) => setDescription(target.value)}
                    />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a description of the book.</p>
                </div>

                <div className="col-span-full" onDrop={handleThumbnailDrop} onDragOver={(e) => e.preventDefault()}>
                <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                    Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                        {thumbnailPreview ? (
                            <>
                                <img src={thumbnailPreview} alt="Thumbnail Preview" className="h-40 mx-auto mb-4" />
                                <div className="flex mt-4 space-x-2">
                                    <button
                                        type="button"
                                        className="px-3 py-1 text-sm font-semibold text-red-600 border border-red-600 rounded-md hover:bg-red-100"
                                        onClick={handleRemoveThumbnail}
                                    >
                                        Remove
                                    </button>
                                    <label
                                        htmlFor="thumbnail"
                                        className="relative cursor-pointer px-3 py-1 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-100"
                                    >
                                        Change
                                        <input
                                            id="thumbnail"
                                            name="thumbnail"
                                            type="file"
                                            className="sr-only"
                                            onChange={handleThumbnailChange}
                                        />
                                    </label>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="thumbnail"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="thumbnail"
                                            name="thumbnail"
                                            type="file"
                                            className="sr-only"
                                            required
                                            onChange={handleThumbnailChange}
                                            value={thumbnail}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600 mt-2">PNG, JPG, JPEG</p>
                            </>
                        )}
                    </div>
                </div>
                </div>

                <div className="sm:col-span-4">
                <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                    Author
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                        type="text"
                        required
                        name="author"
                        id="author"
                        autoComplete="author"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="author"
                        value={author}
                        onChange={({target}) => setAuthor(target.value)}
                    />
                    </div>
                </div>
                </div>

                <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                </label>
                <div className="mt-2 flex">
                    <select
                        id="category"
                        name="category"
                        required
                        autoComplete="category-name"
                        className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 mr-2"
                    >
                        <option value="" className="text-gray-900">Select a category</option>
                        {categories ? categories.map(category => (
                            <option key={category.id} value={category.id} onChange={({target}) => setCategory(target.value)}>
                                {category.name}
                            </option>
                        ))
                        :
                        <LoadingCard/>
                        }
                    </select>
                    <button
                        type="button"
                        className="px-3 py-1.5 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-100"
                    >
                        Add Category
                    </button>
                </div>
            </div>

                <div className="sm:col-span-4">
                <label htmlFor="Published" className="block text-sm font-medium leading-6 text-gray-900">
                    Published
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                        type="Date"
                        required
                        name="Published"
                        id="Published"
                        autoComplete="Published"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        value={published}
                        onChange={({target}) => setPublished(target.value)}
                    />
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
            </button>

            <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
            >
            Save
            </button>
        </div>
        </form>
    )
}

const mapStateToProps = state =>({
    categories: state.categories.categories
})

export default connect(mapStateToProps,{
    get_categories
})(AddABook)