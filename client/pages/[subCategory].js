import Layout from '../components/layout/Layout';
import Card from '../components/card/Card';
import RandomPicture from '../components/randompicture/RandomPicture';
import { titleFn } from '../helpers/title';
import { pathMenu } from '../helpers/menu';
import axios from 'axios';

const Category = ({ categoryData }) => {
  const title = titleFn(categoryData[0].subCategory);

  return (
    <Layout>
      <div className='category_container'>
        <div className='category_title'>
          <p>{title.description}</p>
        </div>
        <div className='randompic'>
          <RandomPicture category={categoryData[0].subCategory} />
        </div>
        <div className='empty'>
          <p>Ponad 100 roznych sklepow</p>
        </div>
        <div className='category_wrapper'>
          {categoryData.map((el) => (
            <Card
              id={el._id}
              name={el.name}
              description={el.description}
              price={el.price}
              category={el.category}
              image={el.image}
              createdAt={el.createdAt}
              key={el.name}
            />
          ))}
        </div>
        <style jsx>
          {`
            .category_container {
            }
            .category_title {
              text-align: center;
              margin: 3rem 0;
              font-size: 3rem;
              color: #000;
            }

            .empty {
              margin: 3rem 0;
              background-color: #000;
              height: 6rem;
              text-align: center;
            }

            .empty p {
              color: #fff;
              font-size: 3rem;
              line-height: 6rem;
            }

            .randompic {
              margin: 0 1rem;
            }

            // *** LIST ***
            .category_wrapper {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(15.9rem, 19.8rem));
              grid-auto-rows: 23.14rem;
              grid-gap: 1.3rem;
              grid-row-gap: 4rem;
              justify-content: center;
              margin: 2rem 1rem 0 1rem;
            }

            @media only screen and (max-width: 768px) {
              .category_title {
                font-size: 1.8rem;
              }
              .empty {
                height: 5rem;
              }
              .empty p {
                font-size: 1.8rem;
                line-height: 5rem;
              }
            }
            @media only screen and (max-width: 320px) {
              .category_wrapper {
                grid-auto-rows: 25.14rem;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Category;

export const getStaticProps = async (ctx) => {
  const subCategory = ctx.params.subCategory;

  let categoryData = await axios({
    method: 'GET',
    url: `/${subCategory}`,
  });

  return {
    props: { categoryData: categoryData.data },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const paths = pathMenu.map((el) => ({
    params: { subCategory: el },
  }));

  return {
    // paths: [
    //   {
    //     params: {
    //       subCategory: 'mezczyzna',
    //     },
    //   },
    // ],
    paths: paths,
    fallback: false, // jezli dam true to te ktorych paramz povyzej podam (np. 1,2,3), beda renderovane na build (te 1,2,3), a kazdy inny np. 4,5,6 itd bedize: Enable statically generating additional pages. I vtedy dla tych 4,5,6 bedzie vidac LOADING..
  };
};
