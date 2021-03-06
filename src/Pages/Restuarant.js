 
import React, { Component } from 'react'

export default class Restuarant extends Component {
    returnhref=(e)=>{
        e.preventDefault();
        return false;
    }
    render() {
        return (
            <div>
                <div className="osahan-restaurant">
                    <div className="osahan-restaurant-detail">
                        <div className="p-3">
                            <div className="forgot-page">
                                <a className="toggle toggle-2" href="2132" onClick={this.returnhref} ><span /></a>
                                {/* <a className="text-primary font-weight-bold" href="home.html"><i className="feather-chevron-left" /> Back</a> */}
                            </div>
                            <div className="pt-3">
                                <h2 className="font-weight-bold">JuxPux Restaurant</h2>
                                <p className="font-weight-light text-dark m-0">Near Shardhanand Park, New Colony, Palwal</p>
                                <div className="rating-wrap d-flex align-items-center mt-2">
                                    <ul className="rating-stars list-unstyled">
                                        <li>
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star" />
                                        </li>
                                    </ul>
                                    <p className="label-rating text-muted ml-2 small"> (245 Reviews)</p>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="row">
                                    {/* <div className="col-6">
                                        <p className="font-weight-bold m-0">Delivery</p>
                                        <p className="text-muted m-0">Free</p>
                                    </div> */}
                                    <div className="col-6">
                                        <p className="font-weight-bold m-0">Open time</p>
                                        <p className="text-muted m-0">8:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary p-3">
                            <div className="d-flex align-items-center">
                                <div className="feather_icon">
                                    <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload" /></a>
                                    <a href="#ratings-and-reviews" className="text-decoration-none text-dark mx-2"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-star" /></a>
                                    <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin" /></a>
                                </div>
                                <a href="tel:7206969076" className="btn btn-sm btn-outline-light ml-auto">Contact</a>
                            </div>
                        </div>
                        <div className="bg-light">
                            <p className="font-weight-bold px-3 pt-3 m-0">FEATURED ITEMS</p>
                            <div className="trending-slider rounded overflow-hidden">
                                <div className="osahan-slider-item px-1 py-3">
                                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <a href="2132" onClick={this.returnhref}>
                                                <img src="img/trending1.png"  alt="no" className="img-fluid item-img w-100" />
                                            </a>
                                        </div>
                                        <div className="p-3 position-relative">
                                            <div className="list-card-body">
                                                <h6 className="mb-1"><a  href="2132" onClick={this.returnhref} className="text-black">Honey Chilly Potato</a>
                                                </h6>
                                                <p className="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
                                                <p className="text-gray m-0"> <span className="text-black-50"> $350</span></p>
                                                <span className="float-right">
                                                    <button className="btn btn-outline-secondary btn-sm">ADD</button>
                                                    {/* <a href="checkout.html" ></a> */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="osahan-slider-item px-1 py-3">
                                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <a  href="2132" onClick={this.returnhref}>
                                                <img src="img/trending2.png" alt="no" className="img-fluid item-img w-100" />
                                            </a>
                                        </div>
                                        <div className="p-3 position-relative">
                                            <div className="list-card-body">
                                                <h6 className="mb-1"><a  href="2132" onClick={this.returnhref} className="text-black">Thai Famous Cuisine</a></h6>
                                                <p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
                                                <p className="text-gray m-0"> <span className="text-black-50"> $250</span></p>
                                                <span className="float-right">
                                                    <button className="btn btn-outline-secondary btn-sm">ADD</button>
                                                    {/* <a href="checkout.html" ></a> */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="osahan-slider-item px-1 py-3">
                                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <a  href="2132" onClick={this.returnhref}>
                                                <img src="img/trending3.png" alt="no" className="img-fluid item-img w-100" />
                                            </a>
                                        </div>
                                        <div className="p-3 position-relative">
                                            <div className="list-card-body">
                                                <h6 className="mb-1"><a  href="2132" onClick={this.returnhref} className="text-black">The osahan Restaurant</a></h6>
                                                <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                                <p className="text-gray m-0"> <span className="text-black-50"> $500</span></p>
                                                <span className="float-right">
                                                    <button className="btn btn-outline-secondary btn-sm">ADD</button>
                                                    {/* <a href="checkout.html" ></a> */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-3">
                        <div className="d-flex item-aligns-center">
                            <p className="font-weight-bold">Menu</p>
                            {/* <a className="small text-primary font-weight-bold ml-auto"  href="2132" onClick={this.returnhref}>View all <i className="feather-chevrons-right" /></a> */}
                        </div>
                        <div className="row">
                            <h6 className="mb-4 mt-3 col-md-12">Quick Bites <small className="text-black-50">3 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-4">
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus" /> </button><input className="count-number-input" type="text" readOnly defaultValue={1} /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus" /> </button></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus" /> </button><input className="count-number-input" type="text" readOnly defaultValue={2} /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus" /> </button></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-danger text-white">Non veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="mb-4 mt-3 col-md-12">Starters <small className="text-black-50">3 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-4">
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter1.jpg" alt="no" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus" /> </button><input className="count-number-input" type="text" readOnly defaultValue={1} /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus" /> </button></span>
                                        <div className="media">
                                            <img src="img/starter2.jpg" alt="no" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter3.jpg" alt="no" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="mb-4 mt-3 col-md-12">Soups <small className="text-black-50">8 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white">
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus" /> </button><input className="count-number-input" type="text" readOnly defaultValue={1} /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus" /> </button></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a href="checkout.html" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="bg-light p-3">
                                <div id="ratings-and-reviews" className="bg-white d-flex align-items-center rounded shadow-sm p-3 mb-3 clearfix restaurant-detailed-star-rating">
                                    <h6 className="mb-0">Rate this Place</h6>
                                    <div className="star-rating ml-auto">
                                        <div className="d-inline-block h6 m-0"><i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star text-warning" />
                                            <i className="feather-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded shadow-sm p-3 mb-3 clearfix graph-star-rating">
                                    <h6 className="mb-0 mb-3">Ratings and Reviews</h6>
                                    <div className="graph-star-rating-header">
                                        <div className="star-rating">
                                            <div className="d-inline-block"><i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star" />
                                            </div>
                                            <b className="text-black ml-2">334</b>
                                        </div>
                                        <p className="text-muted mb-4 mt-2 small">Rated 3.5 out of 5</p>
                                    </div>
                                    <div className="graph-star-rating-body">
                                        <div className="rating-list">
                                            <div className="rating-list-left font-weight-bold small">5 Star</div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div role="progressbar" className="progress-bar bg-info" aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} style={{ width: '56%' }} />
                                                </div>
                                            </div>
                                            <div className="rating-list-right font-weight-bold small">56 %</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left font-weight-bold small">4 Star</div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div role="progressbar" className="progress-bar bg-info" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }} />
                                                </div>
                                            </div>
                                            <div className="rating-list-right font-weight-bold small">23 %</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left font-weight-bold small">3 Star</div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div role="progressbar" className="progress-bar bg-info" aria-valuenow={11} aria-valuemin={0} aria-valuemax={100} style={{ width: '11%' }} />
                                                </div>
                                            </div>
                                            <div className="rating-list-right font-weight-bold small">11 %</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left font-weight-bold small">2 Star</div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div role="progressbar" className="progress-bar bg-info" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} style={{ width: '6%' }} />
                                                </div>
                                            </div>
                                            <div className="rating-list-right font-weight-bold small">6 %</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left font-weight-bold small">1 Star</div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div role="progressbar" className="progress-bar bg-info" aria-valuenow={4} aria-valuemin={0} aria-valuemax={100} style={{ width: '4%' }} />
                                                </div>
                                            </div>
                                            <div className="rating-list-right font-weight-bold small">4 %</div>
                                        </div>
                                    </div>
                                    <div className="graph-star-rating-footer text-center mt-3"><button type="button" className="btn btn-primary btn-block btn-sm">Rate and Review</button></div>
                                </div>
                                <div className="bg-white rounded shadow-sm p-3 mb-3 restaurant-detailed-ratings-and-reviews">
                                    <a className="text-primary float-right"  href="2132" onClick={this.returnhref}>Top Rated</a>
                                    <h6 className="mb-1">All Ratings and Reviews</h6>
                                    <div className="reviews-members py-3">
                                        <div className="media">
                                            <a  href="2132" onClick={this.returnhref}>
                                                <img src="img/reviewer1.png" alt="no" className="mr-3 rounded-pill" /></a>
                                            <div className="media-body">
                                                <div className="reviews-members-header">
                                                    <div className="star-rating float-right">
                                                        <div className="d-inline-block" style={{ fontSize: '14px' }}><i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star" />
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-0"><a className="text-dark"  href="2132" onClick={this.returnhref}>Trump</a></h6>
                                                    <p className="text-muted small">Tue, 20 Mar 2020</p>
                                                </div>
                                                <div className="reviews-members-body">
                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                </div>
                                                <div className="reviews-members-footer"><a className="total-like btn btn-sm btn-outline-primary"  href="2132" onClick={this.returnhref}><i className="feather-thumbs-up" /> 856M</a> <a className="total-like btn btn-sm btn-outline-primary"  href="2132" onClick={this.returnhref}><i className="feather-thumbs-down" /> 158K</a><span className="total-like-user-main ml-2" dir="rtl"><a  href="2132" onClick={this.returnhref} aria-describedby="tooltip-top0">
                                                    <img src="img/reviewer3.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                    <a  href="2132" onClick={this.returnhref} aria-describedby="tooltip-top1">
                                                        <img src="img/reviewer4.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                    <a  href="2132" onClick={this.returnhref}>
                                                        <img src="img/reviewer5.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                    <a  href="2132" onClick={this.returnhref} aria-describedby="tooltip-top3">
                                                        <img src="img/reviewer6.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                </span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="reviews-members py-3">
                                        <div className="media">
                                            <a  href="2132" onClick={this.returnhref}><img src="img/reviewer2.png"  alt="no" className="mr-3 rounded-pill" /></a>
                                            <div className="media-body">
                                                <div className="reviews-members-header">
                                                    <div className="star-rating float-right">
                                                        <div className="d-inline-block" style={{ fontSize: '14px' }}><i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star text-warning" />
                                                            <i className="feather-star" />
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-0"><a className="text-dark" href="1" >Jhon Smith</a></h6>
                                                    <p className="text-muted small">Tue, 20 Mar 2020</p>
                                                </div>
                                                <div className="reviews-members-body">
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </div>
                                                <div className="reviews-members-footer">
                                                    <a className="total-like btn btn-sm btn-outline-primary"  href="2132" onClick={this.returnhref}>
                                                        <i className="feather-thumbs-up" /> 88K</a>
                                                    <a className="total-like btn btn-sm btn-outline-primary"  href="2132" onClick={this.returnhref}>
                                                        <i className="feather-thumbs-down" /> 1K</a>
                                                    <span className="total-like-user-main ml-2" dir="rtl">
                                                        <a  href="2132" onClick={this.returnhref}><img src="img/reviewer3.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                        <a  href="2132" onClick={this.returnhref}><img src="img/reviewer4.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                        <a  href="2132" onClick={this.returnhref}><img src="img/reviewer5.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                        <a  href="2132" onClick={this.returnhref}><img src="img/reviewer6.png" alt="no" className="total-like-user rounded-pill" /></a>
                                                    </span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <a className="text-center w-100 d-block mt-3 font-weight-bold"  href="2132" onClick={this.returnhref}>See All Reviews</a>
                                </div>
                                <div className="bg-white rounded shadow-sm p-3 rating-review-select-page">
                                    <h6 className="mb-3">Leave Comment</h6>
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="m-0 small">Rate the Place</p>
                                        <div className="star-rating ml-auto">
                                            <div className="d-inline-block"><i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star text-warning" />
                                                <i className="feather-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group"><label className="form-label small">Your Comment</label><textarea className="form-control" defaultValue={""} /></div>
                                        <div className="form-group mb-0"><button type="button" className="btn btn-primary btn-block"> Submit Comment </button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
                        <div className="row">
                            <div className="col">
                                <a href="home.html" className="text-dark small font-weight-bold text-decoration-none">
                                    <p className="h4 m-0"><i className="feather-home text-dark" /></p>
                  Home
                </a>
                            </div>
                            <div className="col selected">
                                <a href="trending.html" className="text-danger small font-weight-bold text-decoration-none">
                                    <p className="h4 m-0"><i className="feather-map-pin" /></p>
                  Trending
                </a>
                            </div>
                            <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                                <div className="bg-danger rounded-circle mt-n0 shadow">
                                    <a href="checkout.html" className="text-white small font-weight-bold text-decoration-none">
                                        <i className="feather-shopping-cart" />
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <a href="favorites.html" className="text-dark small font-weight-bold text-decoration-none">
                                    <p className="h4 m-0"><i className="feather-heart" /></p>
                  Favorites
                </a>
                            </div>
                            <div className="col">
                                <a href="profile.html" className="text-dark small font-weight-bold text-decoration-none">
                                    <p className="h4 m-0"><i className="feather-user" /></p>
                  Profile
                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <nav id="main-nav">
                    <ul className="second-nav">
                        <li><a href="index.html"><i className="feather-grid mr-2" /> Intro</a>
                        </li><li><a href="landing.html"><i className="feather-layers mr-2" /> Landing</a>
                        </li><li><a href="home.html"><i className="feather-home mr-2" /> Homepage</a></li>
                        <li>
                            <a  href="2132" onClick={this.returnhref}><i className="feather-edit-2 mr-2" /> Authentication</a>
                            <ul>
                                <li><a href="login.html">Login</a>
                                </li><li><a href="signup.html">Register</a>
                                </li><li><a href="forgot_password.html">Forgot Password</a>
                                </li><li><a href="verification.html">Verification</a>
                                </li><li><a href="location.html">Location</a>
                                </li><li><a href="select_country.html">Select Country</a>
                                </li></ul>
                        </li>
                        <li><a href="trending.html"><i className="feather-trending-up mr-2" /> Trending</a>
                        </li><li><a href="most_popular.html"><i className="feather-award mr-2" /> Most Popular</a>
                        </li><li><a href="restaurant.html"><i className="feather-paperclip mr-2" /> Restaurant Detail</a>
                        </li><li><a href="recipe.html"><i className="feather-file-text mr-2" /> Recipe</a>
                        </li><li><a href="checkout.html"><i className="feather-list mr-2" /> Checkout</a>
                        </li><li><a href="map.html"><i className="feather-map-pin mr-2" /> Live Map</a>
                        </li><li><a href="payment.html"><i className="feather-credit-card mr-2" /> Payment</a>
                        </li><li>
                            <a  href="2132" onClick={this.returnhref}><i className="feather-user mr-2" /> Profile</a>
                            <ul>
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="favorites.html">Favorites</a>
                                </li></ul>
                        </li>
                        <li>
                            <a  href="2132" onClick={this.returnhref}><i className="feather-book mr-2" /> Pages</a>
                            <ul>
                                <li><a href="filters.html">Filters</a>
                                </li><li><a href="terms.html">Terms &amp; conditions</a>
                                </li><li><a href="faq.html">FAQ</a>
                                </li><li><a href="privacy.html">Privacy &amp; Policy</a>
                                </li><li><a href="contact-us.html">Contact Us</a>
                                </li></ul>
                        </li>
                        <li>
                            <a  href="2132" onClick={this.returnhref}><i className="feather-alert-triangle mr-2" /> Error</a>
                            <ul>
                                <li><a href="not-found.html">Not Found</a>
                                </li><li><a href="maintence.html"> Maintence</a>
                                </li><li><a href="coming-soon.html">Coming Soon</a>
                                </li></ul>
                        </li>
                        <li>
                            <a  href="2132" onClick={this.returnhref}><i className="feather-link mr-2" /> Navigation Link Example</a>
                            <ul>
                                <li>
                                    <a  href="2132" onClick={this.returnhref}>Link Example 1</a>
                                    <ul>
                                        <li>
                                            <a  href="2132" onClick={this.returnhref}>Link Example 1.1</a>
                                            <ul>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a  href="2132" onClick={this.returnhref}>Link Example 1.2</a>
                                            <ul>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                                <li><a  href="2132" onClick={this.returnhref}>Link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a  href="2132" onClick={this.returnhref}>Link Example 2</a></li>
                                <li><a  href="2132" onClick={this.returnhref}>Link Example 3</a></li>
                                <li><a  href="2132" onClick={this.returnhref}>Link Example 4</a></li>
                                <li data-nav-custom-content>
                                    <div className="custom-message">
                                        You can add any custom content to your navigation items. This text is just an example.
                  </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="bottom-nav">
                        <li className="email">
                            <a className="text-danger" href="home.html">
                                <p className="h5 m-0"><i className="feather-home text-danger" /></p>
                Home
              </a>
                        </li>
                        <li className="github">
                            <a href="faq.html">
                                <p className="h5 m-0"><i className="feather-message-circle" /></p>
                FAQ
              </a>
                        </li>
                        <li className="ko-fi">
                            <a href="contact-us.html">
                                <p className="h5 m-0"><i className="feather-phone" /></p>
                Help
              </a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        )
    }
}
