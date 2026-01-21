import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add_force_page, add_item_offset } from '../../redux/features/filter-slice';

const SortingArea = ({course_items, num, setCourses, courses,course_list, items }) => {

    return (
        <div className="edu-sorting-area">
            <div className="sorting-left">
                {
                    items 
                    ? ( <h6 className="showing-text">Showing <span>{num}</span> of <span>{items.length}</span> courses</h6> )
                    : ( <h6 className="showing-text">Showing <span>{num}</span> courses</h6> )
                }
            </div>
            <div className="sorting-right">
                <div className="layout-switcher">
                    <label>{course_list ? 'List' : 'Grid' }</label>
                    <ul className="switcher-btn">
                        <li>
                            <Link href="Engineering/all-course">
                                <a className={!course_list?"active":''}><i className="icon-53"></i></a>
                            </Link>
                        </li>
                       
                    </ul>
                </div>
             
            </div>
        </div>
    )
}

export default SortingArea;