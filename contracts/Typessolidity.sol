
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Typessolidity {

    uint public uintVar;

    int public intVar;

    address public addressVar;

    bool public boolVar;

    string public stringVar;

    bytes32 public bytes32Var;

    enum Status { Active, Inactive }

    Status public currentStatus;

    struct User {

        string name;

        uint age;

    }

    mapping(address => User) public users;

    // Fonction pour définir les variables

    function setBool(bool _boolVar) public {

        boolVar =_boolVar;

    }

    function setUser(address userAddr, string memory _name, uint _age) public {

        users[userAddr] = User(_name, _age);

    }

    function setEnum(Status _status) public {

        currentStatus =_status;

    }

}