import {
  Banner,
  Cover,
  Block,
  Text,
  Button,
  Offers,
  AvatarBox,
  Avatar,
  Username,
  ProductBox,
  ProductImg,
  ProductInfos,
  Price,
  Detail,
  CenterBox,
} from "./homeStyles";
import ReactPaginate from "react-paginate";
import Image from "../assets/banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllOffersQuery } from "../redux/ApiSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, Product } from "../redux/Types";
import { Spinner, SpinnerBox } from "../appStyles";

export default function Home() {
  const [currentItems, setCurrentItems] = useState<Product[] | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const filter = useSelector((state: RootState) => state.filter);
  const { limit, search } = filter;
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllOffersQuery({
    sort: filter.price.sort,
    min: filter.price.minMax[0],
    max: filter.price.minMax[1],
  });

  useEffect(() => {
    if (limit) {
      const endOffset = itemOffset + limit;
      if (data?.offers && search.length === 0) {
        setCurrentItems(data?.offers?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil((data?.count as unknown as number) / limit));
      } else if (search.length > 0 && data?.offers) {
        const array: Product[] = [];
        data?.offers?.forEach((offer) => {
          if (
            offer.product_details[0].MARQUE &&
            offer.product_details[0].MARQUE.toLowerCase().indexOf(
              search.toLowerCase()
            ) !== -1
          )
            array.push(offer);
        });
        setCurrentItems(array.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(array.length / limit));
      }
    }
  }, [itemOffset, limit, data, search]);

  const handlePageClick = (event: { selected: number }) => {
    const anchor = document.querySelector("#top");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }

    if (data) {
      const newOffset =
        (event.selected * limit) % (data?.count as unknown as number);
      setItemOffset(newOffset);
    }
  };

  function handleNavigate() {
    navigate("/publish");
  }
  return !isLoading ? (
    <>
      <Banner>
        <Cover src={Image} alt="Cover" />
        <Block>
          <Text>Prêts à faire du tri dans vos placards ?</Text>
          <Button onClick={handleNavigate}>Commencer à vendre</Button>
        </Block>
      </Banner>
      <CenterBox>
        <Offers id="top">
          {currentItems &&
            currentItems.map((offer, idx: number) => {
              if (search.length === 0) {
                return (
                  <div key={idx}>
                    {offer?.owner?.account?.avatar && (
                      <AvatarBox>
                        <Avatar
                          src={offer.owner.account.avatar.secure_url}
                          alt="avatar"
                        />
                        <Username>{offer.owner.account.username}</Username>
                      </AvatarBox>
                    )}
                    <ProductBox
                      noAvatar={
                        (!offer.owner && "25px") ||
                        (!offer.owner.account.avatar && "25px")
                      }
                    >
                      <Link to={`/offer/${offer._id}`}>
                        <ProductImg
                          src={offer?.product_image?.secure_url}
                          alt="product-pic"
                        />
                      </Link>
                    </ProductBox>
                    <ProductInfos>
                      <Price>{offer.product_price}€</Price>
                      <Detail>{offer.product_details[1].TAILLE}</Detail>
                      <Detail>{offer.product_details[0].MARQUE}</Detail>
                    </ProductInfos>
                  </div>
                );
              } else if (
                offer.product_details[0].MARQUE &&
                offer.product_details[0].MARQUE.toLowerCase().indexOf(
                  search.toLowerCase()
                ) !== -1
              ) {
                return (
                  <div key={idx}>
                    {offer?.owner?.account?.avatar && (
                      <AvatarBox>
                        <Avatar
                          src={offer.owner.account.avatar.secure_url}
                          alt="avatar"
                        />
                        <Username>{offer.owner.account.username}</Username>
                      </AvatarBox>
                    )}
                    <ProductBox
                      noAvatar={
                        (!offer.owner && "25px") ||
                        (!offer.owner.account.avatar && "25px")
                      }
                    >
                      <Link to={`/offer/${offer._id}`}>
                        <ProductImg
                          src={offer?.product_image?.secure_url}
                          alt="product-pic"
                        />
                      </Link>
                    </ProductBox>
                    <ProductInfos>
                      <Price>{offer.product_price}€</Price>
                      <Detail>{offer.product_details[1].TAILLE}</Detail>
                      <Detail>{offer.product_details[0].MARQUE}</Detail>
                    </ProductInfos>
                  </div>
                );
              }
            })}
        </Offers>
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </CenterBox>
    </>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
