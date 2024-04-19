import React from "react";
import Student from "../Student/Student";

function List1(props) {


  return (
    <div className="list1-container">
     
      <table>
        <tbody>
          <tr className="days">
            <td className="columns-names">
              <p>
                <span id="columns-names-students">Обучающиеся</span>{" "}
                <span id="columns-names-days">Число</span>
              </p>
            </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <Student studentName="Александр Хубаев" />
          <Student studentName="Добровольский Дмитрий" />
        </tbody>
      </table>
    </div>
  );
}

export default List1;
