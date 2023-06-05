import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/posts">記事一覧</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation