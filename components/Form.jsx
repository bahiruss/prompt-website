import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 head_text text-left>
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write Your Prompt Here"
            required
            className="form_textarea"
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{' '}
            <span className="font-normal">(#product, #WebDevelopment, #Idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

      <div className="flex mr-25 mb-5 gap-8">

        <Link href='/' className="text-gray-500 text-sm">
        Cancel
        
        </Link>

        <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange hover:bg-primary-orange-900 rounded-full text-white">
           {submitting ? 'Sending...' :type}

        </button>

      </div>
      </form>
    </section>
  );
};

export default Form;
