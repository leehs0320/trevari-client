import React from "react";
import Reviews from "./Reviews";
import Bookmarks from "./Bookmarks";

class MypageContents extends React.Component {
  render() {
    if (
      this.props.showBookmarks === false &&
      this.props.showReviews === true
    ) {
      return (
        <Reviews
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
          getMoreReviews={this.props.getMoreReviews}
        />
      );
    } else if (
      this.props.showBookmarks === true &&
      this.props.showReviews === false
    ) {
      return (
        <Bookmarks
          books={this.props.books}
          deleteBookmark={this.props.deleteBookmark}
          getMoreBookmarks={this.props.getMoreBookmarks}
        />
      );
    }
  }
}

export default MypageContents;
